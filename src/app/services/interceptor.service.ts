import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()

export class InterceptorService implements HttpInterceptor  {
  constructor(private injector: Injector) { }
  intercept( req, next ) {
    const authService = this.injector.get(AuthService);
    const tokenizedreq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedreq);
  }
}
