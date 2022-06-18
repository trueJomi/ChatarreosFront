import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSubastaComponent } from './layout/edit-subasta/edit-subasta.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { NewSubastaComponent } from './layout/new-subasta/new-subasta.component';
import { SubastaComponent } from './subasta/subasta.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:ListarComponent
      },
      {
        path:'historial',
        component:HistorialComponent
      }
    ]
  },
  {
    path:'crearSubasta',
    component:NewSubastaComponent
  },
  {
    path:'editar-subasta',
    component:EditSubastaComponent
  },
  {
    path:'subasta/:id',
    component:SubastaComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
