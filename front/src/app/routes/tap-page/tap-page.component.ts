import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoresModel } from '../../models/scores.model';
import { HeaderService } from '../../services/header/header.service';
import { ScoresService } from '../../services/scores/scores.service';

@Component({
	selector: 'app-tap-page',
	templateUrl: './tap-page.component.html',
	styleUrls: [ './tap-page.component.css' ]
})
export class TapPageComponent implements OnInit {
	private scores: ScoresModel[] = [];

	constructor(private headerService: HeaderService, private scoresService: ScoresService, private Router: Router) {}

	public getAllScores = () => {
		this.scoresService.getScores().subscribe((res: any[]) => {
			Object.entries(res).forEach(([ key, value ]) => {
				if (key == 'data') {
					value.map((item) => {
						this.scores.push(item.score);
					});
				}
			});
		});
	};

	ngOnInit() {
		this.headerService.setTitle('Score Table');
		this.headerService.setSubtitle('Here is the list of scores');
		this.headerService.isPlaying = true;
		this.headerService.isScoring = false;
		this.getAllScores();
	}
}
