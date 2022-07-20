import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorRoutingModule } from './comprador-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { SubastaCComponent } from './subasta-c/subasta-c.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { ActivasComponent } from './layout/activas/activas.component';
import { FormPropuestaComponent } from './shared/form-propuesta/form-propuesta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
<<<<<<< HEAD
import { TargetComponent } from './layout/listar/targets/target.component';
=======
import { TargetsComponent } from './layout/listar/targets/targets.component';
import { PropuestaComponent } from './subasta-c/propuesta/propuesta.component';
>>>>>>> 79bfac869a2143299b93b602cfc43b6bcddb0ffc



@NgModule({
  declarations: [
    LayoutComponent,
    ListarComponent,
    SubastaCComponent,
    HistorialComponent,
    ActivasComponent,
    FormPropuestaComponent,
<<<<<<< HEAD
    TargetComponent
=======
    TargetsComponent,
    PropuestaComponent,
>>>>>>> 79bfac869a2143299b93b602cfc43b6bcddb0ffc
  ],
  imports: [
    CommonModule,
    CompradorRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CompradorModule { }
