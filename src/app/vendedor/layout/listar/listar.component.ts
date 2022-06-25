import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Propuesta } from 'src/app/comprador/shared/propuesta';
import { CrearSubastasService } from '../../shared/crear-subastas.service';
import { Chatarra, Subasta } from '../../shared/model.clases';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  misSubastas:Subasta[]=[]

  constructor(
    private subastaService:CrearSubastasService,
    private router:Router,
    private cookieService:CookieService
    ) { }

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.get('sesion')
    if (sesionCookie==""){
      this.router.navigate([''])
    }

    this.subastaService.Listar(+sesionCookie).subscribe(
      (res:any)=>{
        for(var i in res.body){
          var subasta:Subasta=new Subasta();
          var chatarra:Chatarra= new Chatarra();

          subasta.idSubasta=res.body[i].idSubasta;
          subasta.fecha=res.body[i].fecha;
          subasta.status=res.body[i].status;
          subasta.fechaRecojo=res.body[i].fechaRecojo;
          subasta.seleccionado=res.body[i].seleccionado;

          
          chatarra.idChatarra= res.body[i].chatarra.idChatarra;
          chatarra.titulo= res.body[i].chatarra.titulo;
          chatarra.description= res.body[i].chatarra.description;
          chatarra.precioBase= res.body[i].chatarra.precioBase;

          var propuestas1:Propuesta[]=[]

          for(var i in res.body[i].propuestas){
            var propuesta:Propuesta= new Propuesta();
            propuesta.idPropuesta= res.body[i].propuestas[i].idPropuesta;
            propuesta.time=res.body[i].propuestas[i].time;
            propuesta.comprador=res.body[i].propuestas[i].comprador;
            propuesta.price= res.body[i].propuestas[i].price;
            propuesta.subasta= res.body[i].propuestas[i].price;
            propuestas1.push(propuesta);
          }
          subasta.propuestas=propuestas1;
          subasta.chatarra=chatarra;

          this.misSubastas.push(subasta)
        }
      }
    )

  }
  
}


