export class Direccion {
    calle:          string  =   '';
    entreCalles:    string  =   '';
    colonia:        string  =   '';
    codigoPostal:   string  =   '';
    ciudad:         string  =   '';
    estado:         string  =   '';
    pais:           string  =   '';
    referencia:     string  =   '';

    constructor(calle?: string, entreCalles?: string, colonia?: string, codigoPostal?: string, ciudad?: string, estado?: string, pais?: string, referencia?: string){
        if(calle){          this.calle          = calle;}
        if(entreCalles){    this.entreCalles    = entreCalles;}
        if(colonia){        this.colonia        = colonia;}
        if(codigoPostal){   this.codigoPostal   = codigoPostal;}
        if(ciudad){         this.ciudad         = ciudad;}
        if(estado){         this.estado         = estado;}
        if(pais){           this.pais           = pais;}
        if(referencia){     this.referencia     = referencia;}
    }
}