import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorRoutingModule } from './comprador-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { SubastaCComponent } from './subasta-c/subasta-c.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { ActivasComponent } from './layout/activas/activas.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListarComponent,
    SubastaCComponent,
    HistorialComponent,
    ActivasComponent
  ],
  imports: [
    CommonModule,
    CompradorRoutingModule
  ]
})
export class CompradorModule { }
