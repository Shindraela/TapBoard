import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderService } from '../../services/header/header.service';
import { FieldConfig } from '../../field.interface';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	providers: [ AuthService ]
})
export class HomePageComponent implements OnInit {
	@ViewChild(DynamicFormComponent) registerForm: DynamicFormComponent;
	@ViewChild(DynamicFormComponent) loginForm: DynamicFormComponent;

	constructor(
		private CookieService: CookieService,
		private AuthService: AuthService,
		private headerService: HeaderService,
		private Router: Router
	) {}

	/** Register Form Config */
	regConfig: FieldConfig[] = [
		{
			type: 'input',
			label: 'First Name',
			inputType: 'text',
			name: 'first_name',
			validations: [
				{
					name: 'required',
					validator: Validators.required,
					message: 'First Name Required'
				},
				{
					name: 'pattern',
					validator: Validators.pattern('^[a-zA-Z]+$'),
					message: 'Accept only text'
				}
			]
		},
		{
			type: 'input',
			label: 'Last Name',
			inputType: 'text',
			name: 'last_name',
			validations: [
				{
					name: 'required',
					validator: Validators.required,
					message: 'Last Name Required'
				},
				{
					name: 'pattern',
					validator: Validators.pattern('^[a-zA-Z]+$'),
					message: 'Accept only text'
				}
			]
		},
		{
			type: 'input',
			label: 'Email Address',
			inputType: 'email',
			name: 'email',
			validations: [
				{
					name: 'required',
					validator: Validators.required,
					message: 'Email Required'
				},
				{
					name: 'pattern',
					validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
					message: 'Invalid email'
				}
			]
		},
		{
			type: 'input',
			label: 'Password',
			inputType: 'password',
			name: 'password',
			validations: [
				{
					name: 'required',
					validator: Validators.required,
					message: 'Password Required'
				}
			]
		},
		{
			type: 'button',
			label: 'Register'
		}
	];

	/** Login Form Config */
	logConfig: FieldConfig[] = [
		{
			type: 'input',
			label: 'Email Address',
			inputType: 'email',
			name: 'email',
			validations: [
				{
					name: 'required',
					validator: Validators.required,
					message: 'Email Required'
				},
				{
					name: 'pattern',
					validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
					message: 'Invalid email'
				}
			]
		},
		{
			type: 'input',
			label: 'Password',
			inputType: 'password',
			name: 'password',
			validations: [
				{
					name: 'required',
					validator: Validators.required,
					message: 'Password Required'
				}
			]
		},
		{
			type: 'button',
			label: 'Login'
		}
	];

	submit(value: any) {
		this.AuthService
			.signup(this.registerForm.value)
			.then((apiResponse) => console.log(apiResponse))
			.catch((apiResponse) => console.error(apiResponse));
	}

	login(value: any) {
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
	}

	ngOnInit() {
		this.headerService.setTitle('Welcome on Tapboard');
		this.headerService.setSubtitle('Login or register to start tapping');
		this.headerService.isPlaying = false;
		this.headerService.isScoring = false;
	}
}
