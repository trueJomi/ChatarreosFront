import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginComprador(this.comprador).subscribe(
      res => {
        console.log(res);
        sessionStorage.setItem('key', res);
        console.log(sessionStorage.getItem('key'))
        const { idShopper } = res
        this.router.navigate([`/chatarrero/home/${idShopper}`])
        sessionStorage.setItem('idShopper', idShopper)
      },
      err => {
        console.log(err);
        this.msg="Credenciales incorrectas, porfavor ingrese correctamente sus datos";
      }
    )
  }

}
