import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Vendedor } from 'src/app/vendedor/shared/model.clases';


import { LoginService } from '../shared/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.component.html',
  styleUrls: ['./login-vendedor.component.css']
})
export class LoginVendedorComponent implements OnInit {

  vendedor = new Vendedor();
  msg='';

  constructor(private service:LoginService, private router:Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginVendedor(this.vendedor).subscribe(
<<<<<<< HEAD
      (res:any) => {
        // console.log(res);
        var idVendedor = res.body.idVendedor;
        this.cookieService.set('sesion', idVendedor);
        this.router.navigate([`/home`])
=======
      res => {
        console.log(res);
        var idVendedor = res.idVendedor;
        this.cookieService.set('sesion', idVendedor);
        this.router.navigate([`Vendedor-home`])
>>>>>>> ddf14e88b5c46baac616ed56940428e482805a57
      },
      error => {
        // console.log(err);
        this.msg="Credenciales incorrectas, porfavor ingrese correctamente sus datos";
      }
    )
  }

}
