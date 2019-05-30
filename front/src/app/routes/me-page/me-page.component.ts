import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header/header.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-me-page',
	templateUrl: './me-page.component.html',
	styles: []
})
export class MePageComponent implements OnInit {
	constructor(private headerService: HeaderService, private Router: Router, private cookieService: CookieService) {}

	public currentUserName = '';
	public countClick = 0;
	progressbarValue = 100;
	curSec: number = 0;

	getUserInfo() {
		this.currentUserName = this.cookieService.get('userName');
	}

	beginTapboard() {
		if (this.countClick == 1) {
			this.startTimer(10);
		}
	}

	startTimer(seconds: number) {
		const timer$ = interval(1000);

		const sub = timer$.subscribe((sec) => {
			this.progressbarValue = 100 - sec * 100 / seconds;
			this.curSec = sec;

			if (this.curSec === seconds) {
				sub.unsubscribe();
			}

			if (this.curSec == 10) {
				this.Router.navigate([ 'tap' ]);
			}
		});
	}

	ngOnInit() {
		this.getUserInfo();
		this.headerService.setTitle('Hello ' + this.currentUserName);
		this.headerService.setSubtitle('You have 10 seconds to tap. Ready? Steady? Tap!');
		this.headerService.isPlaying = false;
		this.headerService.isScoring = true;
	}
}
