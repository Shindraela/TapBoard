import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header/header.service';

@Component({
	selector: 'app-tap-page',
	templateUrl: './tap-page.component.html',
	styleUrls: [ './tap-page.component.css' ]
})
export class TapPageComponent implements OnInit {
	constructor(private headerService: HeaderService, private Router: Router) {}

	ngOnInit() {
		this.headerService.setTitle('Score Table');
		this.headerService.setSubtitle('Here is the list of scores');
		this.headerService.isPlaying = true;
		this.headerService.isScoring = false;
	}
}
