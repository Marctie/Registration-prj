import { Routes } from '@angular/router';
import { ErrorPage } from './component/error-page';


export const routes: Routes = [

     { path: 'login', loadComponent: () => import('./component/autentication/login').then((m) => m.Login),},
     { path: 'reg', loadComponent: () => import('./component/autentication/signin').then((m) => m.Signin),},
          { path: 'home', loadComponent: () => import('./component/home').then((m) => m.Home),},
          { path: 'firstPage', loadComponent: () => import('./component/first-page').then((m) => m.FirstPage),},
    // todo x domani con francesco esercizio di passare un valore tramite il root 
          { path: 'login/:username', loadComponent: () => import('./component/autentication/login').then((m) => m.Login),},

         {
    path        : '**',
    pathMatch   : 'full',
    component   : ErrorPage,
},
 { path: '', redirectTo: 'home',pathMatch:'full' }, 
];
