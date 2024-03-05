
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
