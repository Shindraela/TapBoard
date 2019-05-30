import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRouter } from './app.router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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

@NgModule({
	declarations: [ AppComponent, HomePageComponent, MePageComponent, HeaderComponent, TapPageComponent ],
	imports: [
		BrowserModule,
		RouterModule.forRoot(MainRouter),
		FormsModule,
		MatProgressBarModule,
		ReactiveFormsModule,
		HttpClientModule
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
	bootstrap: [ AppComponent ]
})
export class AppModule {}
