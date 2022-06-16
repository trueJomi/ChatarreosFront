import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'vendedor',
    loadChildren:()=>
    import('./vendedor/vendedor.module')
    .then((m)=>m.VendedorModule)
  },
  {
    path:'',
    loadChildren:()=>
    import('./auth/auth.module')
    .then((m)=>m.AuthModule)
  },
  {
    path:'chatarrero',
    loadChildren:()=>
    import('./comprador/comprador.module')
    .then((m)=>m.CompradorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
