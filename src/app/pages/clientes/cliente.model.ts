import { Trato } from './trato.model';
import { Direccion } from './direccion.model';

export class Cliente {
    nombre:     string      =   '';
    correo:     string      =   '';
    id:         string      =   '';
    direccion:  Direccion   =   new Direccion();
    tratos:     Trato[]     =   [];

    constructor(id?: any, nombre?: string, apellido?: string, correo?: string, direccion?: Direccion, tratos?: Trato[]){
        if(id){         this.id         = id;}
        if(nombre){     this.nombre     = nombre;}
        if(correo){     this.correo     = correo;}
        if(direccion){  this.direccion  = direccion;}
        if(tratos){     this.tratos     = tratos;}
    }
}