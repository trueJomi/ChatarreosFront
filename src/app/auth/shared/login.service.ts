import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comprador } from 'src/app/comprador/shared/comprador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBase: string=environment.apiBase
  constructor(private http:HttpClient) { }

  public loginComprador(comprador: Comprador):Observable<any>{
    return this.http.post(`${this.apiBase}comprador/login`,comprador)
  }
}
