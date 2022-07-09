import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Propuesta } from './class/propuesta';

@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  private apiBase: string=environment.apiBase
  constructor(private http:HttpClient) { }

  createPropuesta(propuesta:Propuesta){
    return this.http.post<Propuesta>(`${this.apiBase}propuesta`,propuesta);
  }

  BuscarPorId(id:number){
    return this.http.get(`${this.apiBase}propuesta/${id}`)
  }

  ObtenerMayor(idSubasta:number){
    return this.http.get(`${this.apiBase}propuesta/mayor/${idSubasta}`)
  }

  RetirarseDeSubasta(idSubasta:number,idComprador:number){
    return this.http.delete(`${this.apiBase}propuesta/${idSubasta}/${idComprador}`)
  }
}
