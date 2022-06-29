import { Injectable } from "@angular/core";
import { DataServices } from "src/app/data.services";
import { Cliente } from "./cliente.model";

@Injectable()
export class ClienteServices{
    clientes: Cliente[] = [];

    constructor(private ds:DataServices){}

    obtenerListadoClientes(){
        return this.ds.obtenerListadoClientes();
    }

    crearCliente(_cliente: Cliente){
        this.ds.crearCliente(_cliente);
    }

    modificarCliente(_cliente: Cliente){
        this.ds.modificarCliente(_cliente);
    }

    eliminar(_id: string){
        this.ds.eliminarCliente(_id);
    }
}