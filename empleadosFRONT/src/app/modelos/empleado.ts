export class Empleado {

    id?: number;
    nombre: string;
    segundoNombre: string;
    apellido: string;
    segundoApellido: string;
    pais: string;
    documento: string;
    correo: string;
    estado?:string;
    fechaRegistro: string;

    constructor(nombre: string, segundoNombre: string, apellido: string,
        segundoApellido: string, pais: string, documento: string, correo: string, estado:string,fechaRegistro: string) {
        this.nombre = nombre;
        this.segundoNombre = segundoNombre;
        this.apellido = apellido;
        this.segundoApellido = segundoApellido;
        this.pais= pais;
        this.documento = documento;
        this.correo = correo;
        this.estado = estado;
        this.fechaRegistro = fechaRegistro;
    }
    
    getNombre(){
        return this.nombre;
    }

}
