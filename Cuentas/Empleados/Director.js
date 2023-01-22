import { Empleado } from "./Empleado.js";

export class Director extends Empleado{
    constructor(nombre, dni){
        super(nombre, dni)
    }

    verBonificacion(){
        const bono = 10;
        return super._verBonificacion(bono);
    }
}