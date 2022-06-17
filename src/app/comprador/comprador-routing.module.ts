import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subasta } from '../vendedor/shared/model.clases';
import { ActivasComponent } from './layout/activas/activas.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { SubastaCComponent } from './subasta-c/subasta-c.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component: ListarComponent,
      },
      {
        path:'historial',
        component: HistorialComponent,
      },
      {
        path:'a',
        component: ActivasComponent,
      },
      
    ]
  },
  {
    path:'subasta-c',
    component: SubastaCComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompradorRoutingModule { }
