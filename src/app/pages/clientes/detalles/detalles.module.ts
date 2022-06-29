import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './detalles.component';
import { CrearTratoComponent } from '../trato/crear/crear-trato.component';


@NgModule({
  declarations: [
    DetallesComponent,
    CrearTratoComponent
  ],
  imports: [
    CommonModule,
    DetallesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DetallesModule { }
