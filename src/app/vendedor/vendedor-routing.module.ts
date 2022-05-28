import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { NewSubastaComponent } from './layout/new-subasta/new-subasta.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'home',
        component:ListarComponent
      },
      {
        path:'crearSubasta',
        component:NewSubastaComponent
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
