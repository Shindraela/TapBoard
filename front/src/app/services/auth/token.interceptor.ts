import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(public auth: AuthService, private cookieService: CookieService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let access_token = this.cookieService.get('userToken');

		request = request.clone({
			setHeaders: {
				Authorization: `Bearer ${access_token}`
			}
		});

		return next.handle(request);
	}
}
