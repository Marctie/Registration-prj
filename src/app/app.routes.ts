import { Routes } from '@angular/router';
import { ErrorPage } from './error-page/error-page';

export const routes: Routes = [

     { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login),},
     { path: 'reg', loadComponent: () => import('./signin/signin').then((m) => m.Signin),},
          { path: 'home', loadComponent: () => import('./home/home').then((m) => m.Home),},
          { path: 'firstPage', loadComponent: () => import('./first-page/first-page').then((m) => m.FirstPage),},
    // todo x domani con francesco esercizio di passare un valore tramite il root 
          { path: 'login/:username', loadComponent: () => import('./login/login').then((m) => m.Login),},

         {
    path        : '**',
    pathMatch   : 'full',
    component   : ErrorPage,
},
 { path: '', redirectTo: 'home',pathMatch:'full' }, 
];
