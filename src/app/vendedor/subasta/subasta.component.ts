import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Propuesta } from 'src/app/comprador/shared/class/propuesta';
import { CrearSubastasService } from '../shared/crear-subastas.service';
import { Chatarra, Subasta } from '../shared/class/model.clases';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
  styleUrls: ['./subasta.component.css']
})
export class SubastaComponent implements OnInit {

  idUser:number;
  subasta:Subasta=new Subasta();
  misPropuestas:Propuesta[]=[];
  chatarra:Chatarra=new Chatarra();

  constructor(
    private subastaService:CrearSubastasService,
    private link_router:ActivatedRoute,
    private router:Router,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.get('sesion')
    if (sesionCookie== ""){
      this.router.navigate([''])
    }
    this.idUser=+sesionCookie;
    
    
    var idSubastaStr=this.link_router.snapshot.paramMap.get('id')
    if(idSubastaStr==null){
      this.router.navigate(['/home'])
    }

    else{
      var idSubasta:number=+idSubastaStr
      this.subastaService.GetById(idSubasta).subscribe(
        (res:any)=>{
            this.subasta.idSubasta=res.body.idSubasta;
            this.subasta.fecha= res.body.fecha;
            this.subasta.fechaRecojo=res.body.fechaRecojo;
            this.subasta.status=res.body.status;
            this.subasta.seleccionado= res.body.seleccionado;
            this.subasta.vendedor= res.body.vendedor;
            
            
            this.chatarra.idChatarra=res.body.chatarra.idChatarra;
            this.chatarra.titulo=res.body.chatarra.titulo;
            this.chatarra.description= res.body.chatarra.description;
            this.chatarra.precioBase= res.body.chatarra.precioBase;
            this.chatarra.vendedor=res.body.chatarra.vendedor;


            for(var i in res.body.propuestas){
              var propuesta:Propuesta= new Propuesta();
              propuesta.idPropuesta= res.body.propuestas[i].idPropuesta;
              propuesta.time=res.body.propuestas[i].time;
              propuesta.comprador=res.body.propuestas[i].comprador;
              propuesta.price= res.body.propuestas[i].price;
              propuesta.subasta= res.body.propuestas[i].price;
              this.misPropuestas.push(propuesta);
            }
            // console.log(this.subasta)
            if(this.subasta.status=='aceptado'){
              this.router.navigate(['/home/espera',this.subasta.seleccionado.idPropuesta])
            }  
    
        });
        
    }
    
  }

  isNull(){
    if (this.misPropuestas.length==0){
      return true
    }
    else{
      return false
    }
  }

  compararPropuestas(){
    var array:number[]=[]
    for (var i in this.misPropuestas ){
      var price:number=+this.misPropuestas[i].price
      array.push(price);
    }
    var idAceptado:number=0                 
    var max=Math.max(...array);
    for (var i in this.misPropuestas){
      if (+this.misPropuestas[i].price==max){
        idAceptado= this.misPropuestas[i].idPropuesta
      }
    }
    return idAceptado
  }
  AsegniarPropuesta(){
    try{
      this.subastaService.AsignarPropuesta(this.subasta.idSubasta,this.compararPropuestas()).subscribe(
          (res:any)=>{
            this.router.navigate(['/home/espera',res.body.seleccionado.idPropuesta])
          }
        )
    }    
    catch{
      this.router.navigate(['/home'])
    }
    
    
  }

}
