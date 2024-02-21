import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceLogin {

  //colocar a url da api
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/user/login`);
  }

  enviarDadosLogin(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/user/login`, dados);
  }

  enviarDadoscadastro(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/user`, dados);
  }
}
