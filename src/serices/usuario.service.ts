import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TratamentoErrosService } from './tratamento-erros.service';
import { environment } from 'src/enviroments/environment';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlBaseApi = `${environment.urlBaseApi}/api/v1/user/login`;
  private id$ = new BehaviorSubject<string>("");
  private nome$ = new BehaviorSubject<string>("");
  private email$ = new BehaviorSubject<string>("");
  private perfil$ = new BehaviorSubject<string>("");
  private foto$ = new BehaviorSubject<string>("");

  constructor(private httpClient: HttpClient) { }

  public obterIdDaClaim(): Observable<string> {
    return this.id$.asObservable();
  }

  public definirIdNaClaim(id: string) {
    this.id$.next(id);
  }

  public obterPerfilDaClaim(): Observable<string> {
    return this.perfil$.asObservable();
  }

  public definirPerfilNaClaim(perfil: string) {
    this.perfil$.next(perfil);
  }

  public obterNomeDaClaim(): Observable<string> {
    return this.nome$.asObservable();
  }

  public obterEmailDaClaim(): Observable<string> {
    return this.email$.asObservable();
  }

  public definirEmailNaClaim(email: string) {
    this.email$.next(email);
  }

  public definirNomeNaClaim(nome: string) {
    this.nome$.next(nome);
  }


}