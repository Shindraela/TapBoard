import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRouter } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/auth/token.interceptor';

import { HeaderService } from '../app/services/header/header.service';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { MePageComponent } from './routes/me-page/me-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { TapPageComponent } from './routes/tap-page/tap-page.component';
import { DynamicFieldDirective } from './shared/dynamic-field/dynamic-field.directive';
import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		MePageComponent,
		HeaderComponent,
		TapPageComponent,
		DynamicFieldDirective,
		ButtonComponent,
		InputComponent,
		DynamicFormComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(MainRouter),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		},
		HeaderService,
		CookieService,
		AuthGuard
	],
	entryComponents: [ InputComponent, ButtonComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
