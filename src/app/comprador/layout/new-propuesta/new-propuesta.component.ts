import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Propuesta } from '../../shared/propuesta';
import { PropuestaService } from '../../shared/propuesta.service';

@Component({
  selector: 'app-new-propuesta',
  templateUrl: './new-propuesta.component.html',
  styleUrls: ['./new-propuesta.component.css']
})
export class NewPropuestaComponent implements OnInit {

  

  constructor(public propuestaService:PropuestaService, private router: Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  createPropuesta(propuesta:any){
    var sesionCookie:string=this.cookieService.get('sesion')
    propuesta.subasta=1;
    propuesta.comprador=sesionCookie;
    this.propuestaService.createPropuesta(propuesta).subscribe(
      ()=>{
        this.router.navigate(['Comprador-home']);
      },
      (error:any)=>{}
    )

  }    

}
