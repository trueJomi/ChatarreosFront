import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Chatarra, Subasta } from 'src/app/vendedor/shared/class/model.clases';
import { CrearSubastasService } from 'src/app/vendedor/shared/crear-subastas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
<<<<<<< HEAD

  targets:Subasta[]=[]
  sesionCookie:number;

  constructor(
    private subastaService:CrearSubastasService,
    private router:Router,
=======
  targets:Subasta[]=[]
  targetsAceptados:Subasta[]=[]
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private subastaService:CrearSubastasService,
>>>>>>> 79bfac869a2143299b93b602cfc43b6bcddb0ffc
    private cookieService:CookieService,
    ) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.sesionCookie=+this.cookieService.get('sesionC')

    this.subastaService.ListarPorComprador(this.sesionCookie).subscribe(
=======
    var sesionCookie:string=this.cookieService.get('sesionC')
    if (sesionCookie==""){
      this.router.navigate([''])
    }
    this.subastaService.ListarTodoPorEstado('aceptado').subscribe(
      (res:any)=>{
        for(var i in res.body){
          var subasta:Subasta=new Subasta();
          var chatarra:Chatarra= new Chatarra();

          subasta.idSubasta=res.body[i].idSubasta;
          subasta.fecha=res.body[i].fecha;
          subasta.status=res.body[i].status;
          subasta.fechaRecojo=res.body[i].fechaRecojo;
          subasta.seleccionado=res.body[i].seleccionado;
          subasta.vendedor=res.body[i].vendedor;
          
          chatarra.idChatarra= res.body[i].chatarra.idChatarra;
          chatarra.titulo= res.body[i].chatarra.titulo;
          chatarra.description= res.body[i].chatarra.description;
          chatarra.precioBase= res.body[i].chatarra.precioBase;
          subasta.propuestas=res.body[i].propuestas;
          subasta.chatarra=chatarra;
          this.targetsAceptados.push(subasta)
        }   
      }
    );
    this.subastaService.ListarTodoPorEstado('activo').subscribe(
>>>>>>> 79bfac869a2143299b93b602cfc43b6bcddb0ffc
      (res:any)=>{
        for(var i in res.body){
          var subasta:Subasta=new Subasta();
          var chatarra:Chatarra= new Chatarra();
<<<<<<< HEAD
=======

          subasta.idSubasta=res.body[i].idSubasta;
          subasta.fecha=res.body[i].fecha;
          subasta.status=res.body[i].status;
          subasta.fechaRecojo=res.body[i].fechaRecojo;
          subasta.seleccionado=res.body[i].seleccionado;
          subasta.vendedor=res.body[i].vendedor;
          
          chatarra.idChatarra= res.body[i].chatarra.idChatarra;
          chatarra.titulo= res.body[i].chatarra.titulo;
          chatarra.description= res.body[i].chatarra.description;
          chatarra.precioBase= res.body[i].chatarra.precioBase;
          subasta.propuestas=res.body[i].propuestas;
          subasta.chatarra=chatarra;
          this.targets.push(subasta)
        }   
      }
    )
  }
>>>>>>> 79bfac869a2143299b93b602cfc43b6bcddb0ffc

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
          this.targets.push(subasta)
        }   
      }
    )

  }
}
