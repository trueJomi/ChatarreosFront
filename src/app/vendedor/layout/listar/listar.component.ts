import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Comprador } from 'src/app/comprador/shared/class/comprador';
import { Propuesta, PropuestaExt } from 'src/app/comprador/shared/class/propuesta';
import { PropuestaService } from 'src/app/comprador/shared/propuesta.service';
import { CrearSubastasService } from '../../shared/crear-subastas.service';
import { Chatarra, Subasta, Target} from '../../shared/class/model.clases';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  targets:Target[]=[]

  constructor(
    private subastaService:CrearSubastasService,
    private router:Router,
    private cookieService:CookieService,
    private propuestaService:PropuestaService,
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
          subasta.propuestas=res.body[i].propuestas;
          subasta.chatarra=chatarra;

          this.propuestaService.ObtenerMayor(res.body[i].idSubasta).subscribe(
            (resp:any)=>{
                if(resp.body==null){
                  var propuesta:PropuestaExt= new PropuestaExt();
                  propuesta.price= res.body[i].chatarra.precioBase;
                  var target:Target= new Target()
                  target.subasta=subasta;
                  target.propuesta=propuesta;
                  this.targets.push(target)
                }
                else{
                  var propuesta:PropuestaExt= new PropuestaExt();
                  var comprador:Comprador= new Comprador();

                  propuesta.idPropuesta= resp.body.idPropuesta;
                  propuesta.price= resp.body.price;
                  propuesta.subasta= resp.body.subasta;
                  propuesta.time= resp.body.time;

                  comprador.idShopper=resp.body.comprador.idShopper
                  comprador.name=resp.body.comprador.name;
                  comprador.area=resp.body.comprador.area;
                  comprador.phone=resp.body.comprador.phone;
                  comprador.status=resp.body.comprador.status;
                  comprador.user=resp.body.comprador.user;

                  propuesta.comprador= comprador;


                  var target:Target= new Target()
                  target.subasta=subasta;
                  target.propuesta=propuesta;
                  this.targets.push(target)
                }
                
            }
          )

        }

        
      }
    )

  }
}


