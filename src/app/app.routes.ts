import { Routes } from '@angular/router';

export const routes: Routes = [

     { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login),},
     { path: 'reg', loadComponent: () => import('./signin/signin').then((m) => m.Signin),},
         { path: '', redirectTo: 'home',pathMatch:'full' }, 

];
