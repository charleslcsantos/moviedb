import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

const API_TOKEN = 'e63cae93aadcec6c81f95190e32e5006';
const API_URL = 'https://api.themoviedb.org/3';

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

    const modifiedRequest = req.clone({
      params: params,
      url: API_URL + req.url
    });

    return next.handle(modifiedRequest);
  }
}
