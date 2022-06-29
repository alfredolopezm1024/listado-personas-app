import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "./pages/clientes/cliente.model";
import { LogginService } from "./login/logginService.service";
import firebase from 'firebase/compat/app';
import { RoutingService } from "./routing.service";
import { Trato } from './pages/clientes/trato.model';


@Injectable()
export class DataServices{

    constructor(private hc: HttpClient, private lg: LogginService, private rs : RoutingService){}

    private databaseURL : string ="https://listado-personas-app-default-rtdb.firebaseio.com/";

    oppenConectionDB(){
        const firebaseConfig = {
            apiKey: "AIzaSyC9CcvE3ZkFb6kdWGVdNYYsfSu5-mPqDuE",
            authDomain: "listado-personas-app.firebaseapp.com"};
          
        const app = firebase.initializeApp(firebaseConfig);
    }
    
    //------------- Clientes ----------------------------------------------------------------

    obtenerListadoClientes(){
        return this.hc.get(this.databaseURL+'clientes.json?auth='+this.lg.getIdToken());
    }

    crearCliente(_clientes : Cliente){
        this.hc.post(this.databaseURL+'clientes.json?auth='+this.lg.getIdToken(), _clientes)
        .subscribe(
            response => {
                console.log("Se ha agregado una nuevo cliente");
                this.rs.goToHome();
            },
            error=>{
                this.rs.goToGeneralError(error);
            } 
        );
    }

    modificarCliente(_cliente:Cliente){
        debugger;
        this.hc.put(this.databaseURL+'clientes/'+_cliente.id+'.json?auth='+this.lg.getIdToken(),_cliente)
        .subscribe(
            response=>{
                console.log("Cliente actualiozado ["+response+"]");
                this.rs.goToDetalles(_cliente);
            },
            error=>{
                console.log("Cliente actualiozado ["+error+"]");
            }
        );
    }

    eliminarCliente(_id: String){
        this.hc.delete(this.databaseURL+'clientes/'+_id+'.json?auth='+this.lg.getIdToken())
        .subscribe(
            response=>{
                console.log("Cliente actualiozado ["+response+"]");
                this.rs.goToHome();
            },
            error=>{
                console.log("Cliente actualiozado ["+error+"]");
            }
        );
    }

    //------------- Tratos ----------------------------------------------------------------

    obtenerTratos(_id : String){
        return this.hc.get(this.databaseURL+'clientes/'+_id+'/tratos.json?auth='+this.lg.getIdToken());
    }

    //Agregar trato a un cliente
    crearTrato(_trato : Trato, _id : string | undefined){
        return this.hc.post(this.databaseURL+'clientes/'+_id+'/tratos.json?auth='+this.lg.getIdToken(), _trato);
    }


}