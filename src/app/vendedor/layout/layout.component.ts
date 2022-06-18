import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Vendedor } from '../shared/model.clases';
import { LoginService } from 'src/app/auth/shared/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  toggle:boolean=false;
  user:Vendedor;
  
  constructor(private router:Router,private cookieService: CookieService, private vendedorService:LoginService) { }


  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.get('sesion')
    if (sesionCookie==""){
      this.router.navigate([''])
    }
    var idUser:number=+sesionCookie;
    this.vendedorService.BuscarIdVendedor(idUser).subscribe(
      (res:any)=>{
        this.user=res.body
      },
      (error:any)=>{}
    );
  }

  toggleSlideBar(){
    this.toggle=!this.toggle
  }


}
