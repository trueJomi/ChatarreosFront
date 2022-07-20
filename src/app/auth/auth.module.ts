import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginCompradorComponent } from './login-comprador/login-comprador.component';
import { FormsModule } from '@angular/forms';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';
import { RegistrarCompradorComponent } from './registrar-comprador/registrar.component';


@NgModule({
  declarations: [
    LoginCompradorComponent,
    LoginVendedorComponent,
    RegistrarCompradorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
