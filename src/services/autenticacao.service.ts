import { CadastroFeedBack, Tipouser, Usuario, UsuarioAutenticacao, UsuarioCadastro } from 'src/model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TratamentoErrosService } from './tratamento-erros.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/enviroments/environment';
import { Observable, catchError } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Resposta } from 'src/model/base.model';
import { FeedbackResponse } from 'src/model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private urlBaseApi = `${environment.urlBaseApi}/api/v1/user/login`;
  private urlBaseApiCadastro = `${environment.urlBaseApi}/api/v1/user/`;
  private urlBaseApiCadastroFeedback = `${environment.urlBaseApi}/api/v1/feedback`;
  private dadosUsuario: any;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private usuarioService: UsuarioService,
    private tratamentoErrosService: TratamentoErrosService
  ) {
    this.atualizarDadosDoUsuario();
  }

  public autenticar(usuario: Usuario): Observable<Resposta<UsuarioAutenticacao>> {
    const url = `${this.urlBaseApi}`;
    return this.fazerRequisicao(() => this.httpClient.post<Resposta<UsuarioAutenticacao>>(url, usuario));
  }

  public autenticarCadastro(usuario: UsuarioCadastro): Observable<Resposta<UsuarioAutenticacao>> {
    const url = `${this.urlBaseApiCadastro}`;
    return this.fazerRequisicao(() => this.httpClient.post<Resposta<UsuarioAutenticacao>>(url, usuario));
  }

  public autenticarCadastroFeedback(cadastroFeedback: CadastroFeedBack): Observable<Resposta<FeedbackResponse>> {
    const url = `${this.urlBaseApiCadastroFeedback}`;
    return this.fazerRequisicao(() => this.httpClient.post<Resposta<FeedbackResponse>>(url, cadastroFeedback));
  }

  public usuarioEstaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  public armazenarToken(token: string): void {
    localStorage.setItem('token', token);
    this.atualizarDadosDoUsuario();
  }

  public obterToken(): string | null {
    return localStorage.getItem('token');
  }

  public efetuarLogout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public decodificarToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.obterToken();

    if (token !== null) {
      return jwtHelper.decodeToken(token);
    } else {
      console.error('Token não encontrado!');
      return null;
    }
  }

  public obterIdArmazenadoNoToken(): string {
    if (this.dadosUsuario) {
      return this.dadosUsuario.Id;
    }

    return '';
  }

  public obterNomeArmazenadoNoToken(): string {
    if (this.dadosUsuario) {
      return this.dadosUsuario.nome;
    }

    return '';
  }

  public obterEmailArmazenadoNoToken(): string {
    if (this.dadosUsuario) {
      return this.dadosUsuario.email;
    }

    return '';
  }

  public obterPerfilArmazenadoNoToken(): string {
    if (this.dadosUsuario) {
      return this.dadosUsuario.perfil;
    }

    return '';
  }

  public obterFotoArmazenadaNoToken(): string {
    if (this.dadosUsuario) {
      return this.dadosUsuario.foto;
    }

    return '';
  }

  public tokenExpirado(): boolean {
    const jwtHelper = new JwtHelperService();
    const token = this.obterToken();

    if (token) {
      return jwtHelper.isTokenExpired(token);
    } else {
      console.error('Token não encontrado!');
      return true;
    }
  }

  private atualizarDadosDoUsuario() {
    const dadosUsuario = this.decodificarToken();
    if (dadosUsuario) {
      this.usuarioService.definirIdNaClaim(dadosUsuario.Id);
      this.usuarioService.definirNomeNaClaim(dadosUsuario.Nome);
      this.usuarioService.definirEmailNaClaim(dadosUsuario.Email);

    }
  }

  private fazerRequisicao(operacaoHttp: Function): Observable<any> {
    return operacaoHttp().pipe(
      catchError(this.tratamentoErrosService.tratarErro.bind(this.tratamentoErrosService))
    );
  }
}
