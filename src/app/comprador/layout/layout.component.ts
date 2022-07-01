import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comprador } from '../shared/class/comprador';
import { CompradorService } from '../shared/comprador.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  comprador:Comprador;
  nombre:string;
  
  constructor(private router:Router,public compradorService:CompradorService,private cookieService: CookieService) { }

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.get('sesionC')
    if (sesionCookie==""){
      this.router.navigate(['comprador'])
    }
  }

  signOut(){
    this.cookieService.delete('sesionC')
    this.router.navigate([`comprador`]);
  }
  getCompradorById(){
    var sesionCookie:string=this.cookieService.get('sesionC')
    console.log(sesionCookie);
    this.compradorService.getCompradorById(Number(sesionCookie)).subscribe((data: any) => {
      this.comprador=data['body']
      this.nombre=this.comprador.name
      console.log(this.nombre)
    })
   }

}
