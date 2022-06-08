import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompradorComponent } from './login-comprador/login-comprador.component';

const routes: Routes = [
  {
    path: 'login-comprador',
    component: LoginCompradorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
