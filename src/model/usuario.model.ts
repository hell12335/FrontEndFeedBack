
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
