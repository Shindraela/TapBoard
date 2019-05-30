import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { MePageComponent } from './routes/me-page/me-page.component';
import { TapPageComponent } from './routes/tap-page/tap-page.component';

export const MainRouter: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: 'home-page',
		component: HomePageComponent
	},
	{
		path: 'me',
		component: MePageComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: 'tap',
		component: TapPageComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: '**',
		component: HomePageComponent
	}
];
