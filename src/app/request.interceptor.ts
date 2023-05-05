//HttpInterceptor = HttpInterceptor is a service which sit b/w client & server and listen to request and response
//HttpInterceptor can modify our request as well as response.
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method == 'POST') {
      const newRequest = request.clone({ headers: new HttpHeaders().set('user', 'suri') });
      return next.handle(newRequest); //send the new cloned request to server if request method is POST
    }
    return next.handle(request);  // next.handle send the request to the server 

  }
}
