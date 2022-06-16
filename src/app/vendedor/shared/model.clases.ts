export class Subasta{
    idSubasta?:number
    fecha?:Date
    TiempoRecocjo?:Date
    status?:string
    vendedor?:number
    chatarra?:Chatarra
}

export class Chatarra{
    idChatarra?:number
    titulo?:string
    description?:string
    precioBase?:number
    vendedor?:number
}

export class Vendedor{
    idVendedor?:number
    user?:string
    password?:string
    phone?:string
    name?:string
    region?:string
    ciudad?:string
    distrito?:string
    direccion?:string
}