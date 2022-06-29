import { Component, OnInit } from '@angular/core';
import { ClienteServices } from '../clientes.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private cs: ClienteServices) { }
  
  cliente : Cliente = new Cliente();

  ngOnInit(): void {
    this.cliente=new Cliente();
  }

  crearCliente(){
    if(this.cliente.nombre!='' && this.cliente.correo!='')
    this.cs.crearCliente(this.cliente);
  }


}
