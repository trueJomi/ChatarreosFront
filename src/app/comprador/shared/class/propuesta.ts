import { Comprador } from "./comprador";

export class Propuesta {
    idPropuesta:number;
    price:string;
    time:Date;
    subasta:number;
    comprador:number;
}

export class PropuestaExt{
    idPropuesta:number;
    price:number;
    time:Date;
    subasta:number;
    comprador:Comprador;
}
