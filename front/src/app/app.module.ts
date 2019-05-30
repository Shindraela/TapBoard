import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRouter } from './app.router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';

import { HeaderService } from '../app/services/header/header.service';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { SigninPageComponent } from './routes/signin-page/signin-page.component';
import { MePageComponent } from './routes/me-page/me-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { TapPageComponent } from './routes/tap-page/tap-page.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		SigninPageComponent,
		MePageComponent,
		HeaderComponent,
		LoginPageComponent,
		TapPageComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(MainRouter),
		FormsModule,
		MatProgressBarModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [ HeaderService, CookieService, AuthGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
