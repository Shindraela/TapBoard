import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
	title = new BehaviorSubject('Title');
	subtitle = new BehaviorSubject('Subtitle');
	isPlaying = false;
	isScoring = false;
	isLogout = false;

	constructor() {}

	setTitle(title: string) {
		this.title.next(title);
	}

	setSubtitle(subtitle: string) {
		this.subtitle.next(subtitle);
	}
}
