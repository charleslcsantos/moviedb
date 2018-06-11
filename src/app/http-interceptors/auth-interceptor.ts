import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

const API_TOKEN = 'e63cae93aadcec6c81f95190e32e5006';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  /**
   * Adding api_token to all http requests
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params = new HttpParams().set('api_key', API_TOKEN);

    const requestWithToken = req.clone({
      params: params
    });

    return next.handle(requestWithToken);
  }
}
