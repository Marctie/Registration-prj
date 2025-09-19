import { Routes } from '@angular/router';
import { ErrorPage } from './component/error-page';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./component/autentication/login').then((m) => m.Login),
  },
  {
    path: 'reg',
    loadComponent: () => import('./component/autentication/signin').then((m) => m.Signin),
  },
  { path: 'home', loadComponent: () => import('./component/home').then((m) => m.Home) },
  {
    path: 'firstPage',
    loadComponent: () => import('./component/first-page').then((m) => m.FirstPage),
  },
  {
    path: 'login/:username',
    loadComponent: () => import('./component/autentication/login').then((m) => m.Login),
  },
  { path: 'balance', loadComponent: () => import('./component/balance').then((m) => m.Balance) },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorPage,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
