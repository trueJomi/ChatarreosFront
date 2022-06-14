import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/vendedor/shared/model.clases';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.component.html',
  styleUrls: ['./login-vendedor.component.css']
})
export class LoginVendedorComponent implements OnInit {

  vendedor = new Vendedor();
  msg='';

  constructor(private service:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginVendedor(this.vendedor).subscribe(
      res => {
        console.log(res);
        sessionStorage.setItem('key', res);
        console.log(sessionStorage.getItem('key'))
        const { idVendedor } = res
        this.router.navigate([`/home`])
        sessionStorage.setItem('idVendedor', idVendedor)
      },
      err => {
        console.log(err);
        this.msg="Credenciales incorrectas, porfavor ingrese correctamente sus datos";
      }
    )
  }

}
