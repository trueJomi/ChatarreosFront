import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
