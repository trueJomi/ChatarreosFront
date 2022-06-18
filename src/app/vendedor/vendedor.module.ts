import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './layout/listar/listar.component';
import { NewSubastaComponent } from './layout/new-subasta/new-subasta.component';
import { TargetComponent } from './layout/targets/target.component';
import { FormSubastaComponent } from './shared/form-subasta/form-subasta.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { SubastaComponent } from './subasta/subasta.component';
import { EditSubastaComponent } from './layout/edit-subasta/edit-subasta.component';
import { PropuestaComponent } from './subasta/propuesta/propuesta.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListarComponent,
    NewSubastaComponent,
    TargetComponent,
    FormSubastaComponent,
    HistorialComponent,
    SubastaComponent,
    EditSubastaComponent,
    PropuestaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VendedorRoutingModule,
    ReactiveFormsModule,
  ]
})
export class VendedorModule { }
