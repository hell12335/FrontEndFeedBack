import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

export interface Usuario {
    id: number;
    username: string;
    password: string;
    token: string;
}
export interface UsuarioAutenticacao {
  accessToken: string,
  refreshToken: string
}

export interface UsuarioCadastro {
  firstName : string;
  lastname : string;
  username : string;
  email : string;
  password : string;
}

export interface Tipouser {
  tipoLogin:  string,
  tipoCadastro: string
}

export interface CadastroFeedBack{
  comment : string
}

export interface HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  }

// export interface Feedback {
//   username: string;
//   //data: Date;
//   mensagem: string;
// }