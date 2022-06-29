import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticationRoutingModule } from './autentication-routing.module';
import { AutenticationComponent } from './autentication.component';


@NgModule({
  declarations: [
    AutenticationComponent
  ],
  imports: [
    CommonModule,
    AutenticationRoutingModule
  ]
})
export class AutenticationModule { }
