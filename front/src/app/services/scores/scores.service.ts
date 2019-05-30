import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class ScoresService {
	private apiUrl = `${environment.apiUrl}/scores`;

	constructor(private HttpClient: HttpClient, private cookieService: CookieService) {}

	public getScores = () => {
		let myHeader = new HttpHeaders();
		myHeader.append('Content-Type', 'application/json');

		return this.HttpClient.get(`${this.apiUrl}`, {
			headers: myHeader,
			withCredentials: true
		});
	};

	public postScore = (score: Number, user: String): Promise<any> => {
		let myHeader = new HttpHeaders();
		myHeader.append('Content-Type', 'multipart/form-data');
		myHeader.append('X-Requested-With', 'XMLHttpRequest');

		return this.HttpClient
			.post(`${this.apiUrl}/score`, { score, user }, { headers: myHeader })
			.toPromise()
			.then((apiResponse) => Promise.resolve(apiResponse))
			.catch((apiResponse) => Promise.reject(apiResponse));
	};
}
