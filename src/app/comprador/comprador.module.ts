import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorRoutingModule } from './comprador-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    CompradorRoutingModule
  ]
})
export class CompradorModule { }
