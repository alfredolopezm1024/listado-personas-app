import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class RoutingService{

    constructor(private rt:Router){}

    goToHome(){this.rt.navigate([''])}
    goToLogin(){this.rt.navigate(['login'])}
    goToLista(){this.rt.navigate(['lista-personas'])}
    goToCrear(){this.rt.navigate(['crear-personas'])}
    goToAuthError(_value : any){this.rt.navigate(['autentication-error'], {state:{error:_value}})}
    goToGeneralError(_value : any){this.rt.navigate(['general-error'], {state:{error:_value}})}
    // goToDetalles(_index: number, _value: any){this.rt.navigate(['detalles'],{state:{indice:_index,valor:_value}})}
    goToDetalles(_value: any){this.rt.navigate(['detalles'],{state:{valor:_value}})}
    // goToModificar(_index: number, _value: any){this.rt.navigate(['modificar'],{state:{indice:_index,valor:_value}})}
    goToModificar(_value: any){this.rt.navigate(['modificar'],{state:{valor:_value}})}
}