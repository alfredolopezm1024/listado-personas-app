import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarRoutingModule } from './modificar-routing.module';
import { ModificarComponent } from './modificar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModificarComponent
  ],
  imports: [
    CommonModule,
    ModificarRoutingModule,
    FormsModule
  ]
})
export class ModificarModule { }
