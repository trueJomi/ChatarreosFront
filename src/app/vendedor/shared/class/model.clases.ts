import { Propuesta, PropuestaExt } from "src/app/comprador/shared/class/propuesta"

export class Subasta{
    idSubasta:number
    fecha:Date
    seleccionado:PropuestaExt
    fechaRecojo:Date
    propuestas:Propuesta[]
    status:string
    vendedor:number
    chatarra:Chatarra
}

export class Target{
    subasta:Subasta
    propuesta:PropuestaExt;
}

export class Chatarra{
    idChatarra:number
    titulo:string
    description:string
    precioBase:number
    vendedor:number
}

export class Vendedor{
    idVendedor:number
    user:string
    password:string
    phone:string
    name:string
    departamento:string
    provincia:string
    latitud:number
    longitud:number
    distrito:string
    direccion:string
}