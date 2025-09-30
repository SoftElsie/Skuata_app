import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {

  constructor(private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(event => {}),
      catchError((error: HttpErrorResponse) => {
        if(error.status == HttpStatusCode.Unauthorized)
        {
          localStorage.clear()
          this.route.navigate(['/auth/login'])
        }
        return throwError(() => error);
      })
    );
  }
}