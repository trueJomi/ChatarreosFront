import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCompradorComponent } from './comprador/registrar.component';
import { LoginCompradorComponent } from './login-comprador/login-comprador.component';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';

const routes: Routes = [
  {
    path: 'comprador',
    component: LoginCompradorComponent,
  },
  {
    path: '',
    component: LoginVendedorComponent,
  },
  {
    path: 'registro-comprador',
    component: RegistrarCompradorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
