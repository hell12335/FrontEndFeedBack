
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AutenticacaoService } from "src/services/autenticacao.service";


@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private autenticacaoServico: AutenticacaoService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (this.autenticacaoServico.usuarioEstaAutenticado()) {
      return true;
    }

    return this.router.parseUrl("/login");
  }
}
