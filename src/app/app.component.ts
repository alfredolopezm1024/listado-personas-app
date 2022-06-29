import { Component } from '@angular/core';
import { DataServices } from './data.services';
import { LogginService } from './login/logginService.service';

import { RoutingService } from './routing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'listado-personas-app';
  // currentPage='';
  
  constructor(private ls: LogginService, private rs: RoutingService, private ds: DataServices){}

  ngOnInit(): void {
    this.ds.oppenConectionDB();
  }

  isAutenticado(){return this.ls.isAutenticado()}

  

  
  salir(){
    // this.currentPage='';
    this.ls.logOut()
  }
  
  goToList(){
    // this.currentPage='lista-clientes';
    this.rs.goToHome()
  }
  goToAddClient(){
    // this.currentPage='crear-cliente';
    this.rs.goToCrear()
  }
  goToLogin(){
    // this.currentPage='';
    this.rs.goToLogin()
  }

}
