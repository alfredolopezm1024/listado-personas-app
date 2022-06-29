import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServices } from './data.services';
import { LoginComponent } from './login/login.component';
import { LogginService } from './login/logginService.service';

import { RoutingService } from './routing.service';
import { LogginGuardian } from './login/loginGuardian.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { UtilitiesService } from './utilities/utilities.service';
import { ClienteServices } from './pages/clientes/clientes.service';
import { TratoService } from './pages/clientes/trato/trato.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [ClienteServices, TratoService, DataServices, LogginService, RoutingService, LogginGuardian, UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
