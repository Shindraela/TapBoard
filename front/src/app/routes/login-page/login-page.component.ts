import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	providers: [ AuthService ]
})
export class LoginPageComponent implements OnInit {
	public form: FormGroup;

	constructor(private FormBuilder: FormBuilder, private AuthService: AuthService, private Router: Router) {}

	private initForm = () => {
		this.form = this.FormBuilder.group({
			email: [ undefined, Validators.required ],
			password: [ undefined, Validators.required ]
		});
	};

	public login = () => {
		// Vérifier les champs
		this.AuthService
			.login(this.form.value)
			.then((apiResponse) => {
				this.Router.navigate([ 'me' ]);
				console.log('Logged', apiResponse);
			})
			.catch((apiResponse) => console.error(apiResponse));
	};

	ngOnInit() {
		this.initForm();
	}
}
