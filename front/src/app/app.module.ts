import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRouter } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule
} from '@angular/material';
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
		HttpClientModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatRippleModule
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
