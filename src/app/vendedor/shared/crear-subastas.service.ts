import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Subasta } from './model.clases';

@Injectable({
  providedIn: 'root'
})
export class CrearSubastasService {

  private controller:string='crearSubasta'
  private apiBase: string=environment.apiBase

  constructor(private http:HttpClient) {}

  CrearSubasta(subasta:Subasta){
    return this.http.post<Subasta>(`${this.apiBase}/subasta/crear`,subasta);
  }

  Eliminar(id:number){
    return this.http.put<Subasta>(`${this.apiBase}${this.controller}/eliminar/${id}`,null)
  }

  Listar(id:number){
    return this.http.get<Subasta[]>(`${this.apiBase}${this.controller}/${id}`);
  }

  ListarEstado(id:number,estado:string){
    return this.http.get<Subasta[]>(`${this.apiBase}${this.controller}/estados/${id}/${estado}`);

  }

  update(subasta:Subasta){
      return this.http.put<Subasta>(`${this.apiBase}/subasta/editar`,subasta);
  }

  getVendedor(id : number){
    return this.http.get<Subasta>(`${this.apiBase}/vendedor/${id}`);
  }



}
