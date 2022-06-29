import { Injectable } from "@angular/core";
import { DataServices } from "src/app/data.services";
import { Trato } from '../trato.model';

@Injectable()
export class TratoService{

    constructor(private ds:DataServices){}

    obtenerTratos(_id:string){
        return this.ds.obtenerTratos(_id);
    }

    crearTrato(_trato: Trato, _id: string | undefined){
        return this.ds.crearTrato(_trato, _id);
    }
}