export class Subasta{
    idSubasta?:number
    fecha?:Date
    TiempoRecocjo?:Date
    vendedor?:Vendedor
    chatarra?:Chatarra
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


export class Chatarra{
    idChatarra?:number
    titulo?:string
    description?:string
    precioBase?:number
    vendedor?:Vendedor
}