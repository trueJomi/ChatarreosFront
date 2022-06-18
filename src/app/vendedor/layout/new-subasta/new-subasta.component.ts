import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrearSubastasService } from '../../shared/crear-subastas.service';
import { Chatarra, Subasta } from '../../shared/model.clases';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-subasta',
  templateUrl: './new-subasta.component.html',
  styleUrls: ['./new-subasta.component.css']
})
export class NewSubastaComponent implements OnInit {

  subasta:Subasta = new Subasta();
  idUser:number;

  constructor(public servicoCrearSubastas:CrearSubastasService, private router:Router, private cookieService: CookieService) {

    
  } 

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.get('sesion')
    if (sesionCookie== ""){
      this.router.navigate([''])
    }
    this.idUser=+sesionCookie;
  }

  CrearSubasta(chatarra:Chatarra){
    this.subasta.chatarra=chatarra
    this.subasta.vendedor=this.idUser
    this.servicoCrearSubastas.CrearSubasta(this.subasta).subscribe(
      (res:any)=>{
        this.router.navigate(['/subasta',res.body.idSubasta]);
      },
      (error:any)=>{}
    )

  }    

}

