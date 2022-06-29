import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../../routing.service';
import { LogginService } from '../../../login/logginService.service';
import { Cliente } from '../cliente.model';
import { ClienteServices } from '../clientes.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  temp: Cliente = new Cliente();
  data : any | undefined;

  constructor(private rt : Router, private rs : RoutingService, private lg: LogginService, private cs : ClienteServices) { 
    this.data = this.rt.getCurrentNavigation()?.extras?.state;
  }
  
  ngOnInit(): void {
    if(this.data==undefined){
      this.rs.goToLista();
    }
    this.lg.validateAutentication();
    const cliente =this.data['valor'];
    this.temp=JSON.parse(JSON.stringify(cliente));
    this.cliente=cliente;

  }

  guardar(){
    this.cs.modificarCliente(this.cliente);
    console.log(JSON.stringify(this.cliente));
  }

  regresar(){
    this.cliente=this.temp;
    this.rs.goToDetalles(this.cliente);
  }

}
