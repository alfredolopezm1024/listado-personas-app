import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { RoutingService } from "../routing.service";
import { LogginService } from "./logginService.service";

@Injectable()
export class LogginGuardian implements CanActivate{
    
    constructor(private ls: LogginService, private rs: RoutingService){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        return this.ls.validateAutentication();

        // if(this.ls.isAutenticado()){
        //     return true;
        // }else{
        //     this.rs.goToLogin();
        //     return false;
        // }
    }
}