import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  auth_token = '324343gg345fh435432hgertr33453gefyrey345435';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizedReq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`
      }
    });
    return next.handle(tokenizedReq).pipe(
      retry(2),
      catchError((err: HttpErrorResponse) => {
        console.log('Route user to error page');
        return throwError(err.message);
      })
    );
  }
}
