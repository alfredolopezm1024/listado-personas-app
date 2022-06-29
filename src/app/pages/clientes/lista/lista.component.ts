import { Component, OnInit } from '@angular/core';

import { ClienteServices } from '../clientes.service';
import { RoutingService } from '../../../routing.service';
import { Cliente } from '../cliente.model';
import { LogginService } from '../../../login/logginService.service';
import { UtilitiesService } from '../../../utilities/utilities.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaClientes: Cliente[]=[];

  constructor(private cs: ClienteServices, private rs: RoutingService, private ls: LogginService, private us: UtilitiesService) { }

  ngOnInit(): void {
    this.obtenerClientes()
  }

  obtenerClientes(){
    this.cs.obtenerListadoClientes().subscribe((lst: Array<any> | any)=>{
      this.listaClientes=this.us.jsonToArray(lst);
    });
  }

  detalles(_cliente : Cliente){
    this.rs.goToDetalles(_cliente);    
  }

}
