import { Injectable, NgModule } from '@angular/core';
import {  HttpEvent,  HttpInterceptor,  HttpHandler,  HttpRequest} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
   intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

      const token = localStorage.getItem('token')

      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      return next.handle(req);
   }
}
@NgModule({
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
   }]
})
export class Interceptor { }
