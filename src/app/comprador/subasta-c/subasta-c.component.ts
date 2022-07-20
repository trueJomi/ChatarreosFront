import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Chatarra, Subasta } from 'src/app/vendedor/shared/class/model.clases';
import { CrearSubastasService } from 'src/app/vendedor/shared/crear-subastas.service';
import { Propuesta } from '../shared/class/propuesta';
import { PropuestaService } from '../shared/propuesta.service';

@Component({
  selector: 'app-subasta-c',
  templateUrl: './subasta-c.component.html',
  styleUrls: ['./subasta-c.component.css']
})
export class SubastaCComponent implements OnInit {
  propuesta = new Propuesta();
  idSubasta: number;
  subasta: Subasta = new Subasta();
  chatarra: Chatarra = new Chatarra();
  misPropuestas: Propuesta[] = [];
  counter: number = 0;
  constructor(public propuestaService: PropuestaService, public subastaService: CrearSubastasService, private router: Router, private cookieService: CookieService, public activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.idSubasta = Number(paramMap.get('id'));
    });
  }

  ngOnInit(): void {
    this.subastaService.GetById(this.idSubasta).subscribe(
      (res: any) => {
        this.subasta.idSubasta = res.body.idSubasta;
        this.subasta.fecha = res.body.fecha;
        this.subasta.fechaRecojo = res.body.fechaRecojo;
        this.subasta.status = res.body.status;
        this.subasta.seleccionado = res.body.seleccionado;
        this.subasta.vendedor = res.body.vendedor;


        this.chatarra.idChatarra = res.body.chatarra.idChatarra;
        this.chatarra.titulo = res.body.chatarra.titulo;
        this.chatarra.description = res.body.chatarra.description;
        this.chatarra.precioBase = res.body.chatarra.precioBase;
        this.chatarra.vendedor = res.body.chatarra.vendedor;


        for (var i in res.body.propuestas) {
          var propuesta: Propuesta = new Propuesta();
          propuesta.idPropuesta = res.body.propuestas[i].idPropuesta;
          propuesta.time = res.body.propuestas[i].time;
          propuesta.comprador = res.body.propuestas[i].comprador;
          propuesta.price = res.body.propuestas[i].price;
          propuesta.subasta = res.body.propuestas[i].price;
          this.misPropuestas.push(propuesta);
          if(propuesta.comprador==Number(this.cookieService.get('sesionC'))){
            this.counter=this.counter+1;
          }
        }
        // console.log(this.subasta)
        // if(this.subasta.status=='aceptado'){
        //   this.router.navigate(['/home/espera',this.subasta.seleccionado.idPropuesta])
        // }  

      });
  }
  createPropuesta(propuesta: any) {
    var sesionCookie: string = this.cookieService.get('sesionC')
    propuesta.subasta = this.idSubasta;
    propuesta.comprador = sesionCookie;
    this.propuestaService.createPropuesta(propuesta).subscribe(
      (res) => {
        this.router.navigate(['/Comprador-home']);
      },
      (error: any) => { }
    )

  }
  isNull(){
    if (this.counter==0){
      return true
    }
    else{
      return false
    }
  }

  RetirarseDeSubasta() {
    var sesionCookie: string = this.cookieService.get('sesionC')

    if (this.subasta.status == "activo") {
      this.propuestaService.RetirarseDeSubasta(this.idSubasta, Number(sesionCookie)).subscribe(
        () => {
          console.log("Se retiro de la Subasta")
          this.router.navigate(['/Comprador-home']);
        },
        err => {
          console.log(err);
        }
      )
    }
    else{
      console.log("No se puede retirar de la subasta porque su estado no es activo")
    }

  }

}
