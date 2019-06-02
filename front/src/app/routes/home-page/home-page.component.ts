import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderService } from '../../services/header/header.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	providers: [ AuthService ]
})
export class HomePageComponent implements OnInit {
	public registerForm: FormGroup;
	public loginForm: FormGroup;

	constructor(
		private FormBuilder: FormBuilder,
		private CookieService: CookieService,
		private AuthService: AuthService,
		private headerService: HeaderService,
		private Router: Router
	) {}

	private initForm = () => {
		this.registerForm = this.FormBuilder.group({
			first_name: [ '', Validators.required ],
			last_name: [ '', Validators.required ],
			email: [ '', Validators.required ],
			password: [ '', Validators.required ]
		});

		this.loginForm = this.FormBuilder.group({
			email: [ '', Validators.required ],
			password: [ '', Validators.required ]
		});
	};

	public hasError = (controlName: string, errorName: string) => {
		return this.loginForm.controls[controlName].hasError(errorName);
	};

	public hasRegisterError = (controlName: string, errorName: string) => {
		return this.registerForm.controls[controlName].hasError(errorName);
	};

	public signin = () => {
		// Vérifier les champs
		this.AuthService
			.signup(this.registerForm.value)
			.then((apiResponse) => console.log(apiResponse))
			.catch((apiResponse) => console.error(apiResponse));
	};

	public login = () => {
		// Vérifier les champs
		this.AuthService
			.login(this.loginForm.value)
			.then((apiResponse) => {
				this.CookieService.set('userToken', apiResponse.data.token);
				this.CookieService.set('userid', apiResponse.data.user._id);
				this.CookieService.set('userName', apiResponse.data.user.first_name);
				this.Router.navigate([ 'me' ]);
				console.log('Logged', apiResponse);
			})
			.catch((apiResponse) => console.error(apiResponse));
	};

	ngOnInit() {
		this.headerService.setTitle('Welcome on Tapboard');
		this.headerService.setSubtitle('Login or register to start tapping');
		this.headerService.isPlaying = false;
		this.headerService.isScoring = false;
		this.initForm();
	}
}
