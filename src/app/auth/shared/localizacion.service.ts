import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  private location:string= environment.locationApi
  constructor(private http:HttpClient) {

  }

  ObtenerLista(){
    return this.http.get(this.location+'departamento')
  }


  




}
