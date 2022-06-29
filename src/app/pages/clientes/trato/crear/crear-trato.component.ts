import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Trato } from '../../trato.model';
import { Cliente } from '../../cliente.model';
import { TratoService } from '../trato.service';

@Component({
  selector: 'app-crear-trato',
  templateUrl: './crear-trato.component.html',
  styleUrls: ['./crear-trato.component.css']
})
export class CrearTratoComponent implements OnInit {

  constructor(private ts: TratoService) { }

  @Input() cliente : Cliente | undefined;
  @Output() resultado = new EventEmitter<boolean>();

  trato : Trato = new Trato();

  ngOnInit(): void {
  }

  guardar(){
    debugger;
    this.trato.fechaRegistro=new Date().toISOString();
    this.ts.crearTrato(this.trato, this.cliente?.id).subscribe(
      response => {
          console.log("Se ha agregado una nuevo trato");
          this.resultado.emit(true);
      },
      error=>{
        console.log(error);
      } 
  );

    
  }

  cancelar(){
    this.resultado.emit(false);
  }

  getTotal(event: any){
    debugger;
    console.log(event.target.value);
    if(this.trato.cantidad!=undefined || this.trato.cantidad!=null && this.trato.precio!=undefined && this.trato.precio!=null){
      this.trato.total=this.trato.cantidad*this.trato.precio;
    }else{
      this.trato.total=0;
    }
  }


}
