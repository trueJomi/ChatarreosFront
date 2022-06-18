import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Comprador } from 'src/app/comprador/shared/comprador';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login-comprador',
  templateUrl: './login-comprador.component.html',
  styleUrls: ['./login-comprador.component.css']
})
export class LoginCompradorComponent implements OnInit {
  comprador = new Comprador();
  msg='';

  constructor(private service:LoginService, private router:Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginComprador(this.comprador).subscribe(
      res => {
        // console.log(res);
        var idShopper = res.idShopper;
        this.cookieService.set('sesion', idShopper);
        this.router.navigate([`Comprador-home`])
      },
      err => {
        console.log(err);
        this.msg="Credenciales incorrectas, porfavor ingrese correctamente sus datos";
      }
    )
  }

}
