import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorHandlerService  {

    handleErrors(err : HttpErrorResponse){
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        console.log('Evento de la respuesta http:', event);
                    }
                }, (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                       this.handleErrors(err);
                    }
                })
            );
    }

}