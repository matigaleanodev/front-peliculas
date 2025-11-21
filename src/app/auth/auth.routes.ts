import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./landing/landing.page').then((m) => m.LandingPage),
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
];
