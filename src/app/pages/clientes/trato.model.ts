export class Trato {
    
    id:             string  =   '';
    descripcion:    string  =   '';
    precio:         number  =   0;
    cantidad:       number  =   0;
    total:          number  =   0;
    fechaRegistro:  string  =    '';

    constructor(id?: string, descripcion?: string, precio?: number, cantidad?: number, total?: number, fechaRegistro?: string){
        if(id){             this.id             = id;}
        if(descripcion){    this.descripcion    = descripcion;}
        if(precio){         this.precio         = precio;}
        if(cantidad){       this.cantidad       = cantidad;}
        if(total){          this.total          = total;}
        if(fechaRegistro){  this.fechaRegistro  = fechaRegistro;}
    }
}