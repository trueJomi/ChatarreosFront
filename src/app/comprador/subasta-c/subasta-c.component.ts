import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Propuesta } from '../shared/class/propuesta';
import { PropuestaService } from '../shared/propuesta.service';

@Component({
  selector: 'app-subasta-c',
  templateUrl: './subasta-c.component.html',
  styleUrls: ['./subasta-c.component.css']
})
export class SubastaCComponent implements OnInit {
  propuesta = new Propuesta();
  idSubasta:number;
  constructor(public propuestaService:PropuestaService, private router: Router,private cookieService: CookieService,public activeRoute:ActivatedRoute) { 
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.idSubasta = Number(paramMap.get('id'));
      });
  }

  ngOnInit(): void {
  }
  createPropuesta(propuesta:any){
    var sesionCookie:string=this.cookieService.get('sesion')
    propuesta.subasta=this.idSubasta;
    propuesta.comprador=sesionCookie;
    this.propuestaService.createPropuesta(propuesta).subscribe(
      ()=>{
        
      },
      (error:any)=>{}
    )

  }   

}
