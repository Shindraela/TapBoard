import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderService } from '../../services/header/header.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	providers: [ AuthService ]
})
export class HeaderComponent implements OnInit {
	title = '';
	subtitle = '';

	constructor(
		private authService: AuthService,
		private headerService: HeaderService,
		private Router: Router,
		private cookieService: CookieService
	) {}

	logout() {
		this.cookieService.deleteAll();
		this.Router.navigate([ '' ]);
	}

	ngOnInit() {
		this.headerService.title.subscribe((updatedTitle) => {
			this.title = updatedTitle;
		});
		this.headerService.subtitle.subscribe((updatedSubtitle) => {
			this.subtitle = updatedSubtitle;
		});
	}
}
