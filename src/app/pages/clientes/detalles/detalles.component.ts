import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../../routing.service';
import { LogginService } from '../../../login/logginService.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from '../cliente.model';
import { Trato } from '../trato.model';
import { ClienteServices } from '../clientes.service';
import { UtilitiesService } from '../../../utilities/utilities.service';
import { TratoService } from '../trato/trato.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DetallesComponent implements OnInit {

  data : any | undefined;

  cliente:Cliente = new Cliente();
  tratos: Trato[]=[];

  constructor(private rt : Router, private rs : RoutingService, private lg: LogginService, config: NgbModalConfig, private modalService: NgbModal, private cs: ClienteServices, private us: UtilitiesService, private ts: TratoService) { 
    config.backdrop = 'static';
    config.keyboard = false;
    this.data = (this.rt.getCurrentNavigation()?.extras?.state);
  }
  
  ngOnInit(): void {
    if(this.data==undefined){
      this.rs.goToLista();
      return;
    }

    this.lg.validateAutentication();
    this.cliente=this.data['valor'];
    this.getTratos();
  }

  modificar(){
    this.rs.goToModificar(this.cliente);    
  }  

  confirmarEliminar(content : any){
    this.modalService.open(content);
  }

  getTratos(){
    this.ts.obtenerTratos(this.cliente.id).subscribe((lst: Array<any> | any)=>{
      this.tratos=this.us.jsonToArray(lst);
    });
  }
  
  eliminar(){
    this.modalService.dismissAll();
    this.cs.eliminar(this.cliente.id);
    console.log("Eliminado");
  }

  agregarTrato(_content : any){
    this.modalService.open(_content, { size: 'lg' });
  }

  cerrarModal(_resultado: any){
    if(_resultado){
      this.getTratos();
    }

    this.modalService.dismissAll();
  }

  guardarTrato(){
    this.modalService.dismissAll();
    this.cs.eliminar(this.cliente.id);
    console.log("Eliminado");
  }


  
}
