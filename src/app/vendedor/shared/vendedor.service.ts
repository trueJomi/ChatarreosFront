import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private controller:string='vendedor'
  private apiBase: string=environment.apiBase
  constructor(private http:HttpClient) { 

  }

  public BuscarIdVendedor(id:Number){
    return this.http.get<any>(`${this.apiBase}${this.controller}/${id}`)
  }
}
