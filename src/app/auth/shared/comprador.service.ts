import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comprador } from 'src/app/comprador/shared/class/comprador';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompradorService {

  private apiBase: string=environment.apiBase
  constructor(private http:HttpClient) { }

  getCompradorById(idShopper: number){
    return this.http.get<Comprador>(`${this.apiBase}comprador/${idShopper}`);
  }
  createComprador(comprador:Comprador){
    return this.http.post<Comprador>(`${this.apiBase}comprador`,comprador);
  }
  updateComprador(comprador:Comprador){
    return this.http.put<Comprador>(this.apiBase,comprador);
  }
  deleteComprador(comprador:Comprador){
    return this.http.delete<Comprador>(this.apiBase+"/"+comprador.idShopper);
  }
}
