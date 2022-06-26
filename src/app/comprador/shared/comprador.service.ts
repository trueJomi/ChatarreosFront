import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comprador } from './class/comprador';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {

  private apiBase: string=environment.apiBase
  constructor(private http:HttpClient) { }

  getCompradorById(idShopper: number){
    return this.http.get<Comprador>(`${this.apiBase}comprador/${idShopper}`);
  }
}
