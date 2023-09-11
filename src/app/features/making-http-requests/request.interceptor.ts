import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Modify request object here
        const modifiedRequest = request.clone({
            setHeaders: {
                Authorization: 'Bearer YourAuthToken'
            }
        });

        return next.handle(modifiedRequest);
    }
}