import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet,  } from '@angular/router';
import { Login } from "./component/autentication/login";
import { Home } from './component/home';
import { Alert } from "./component/alert";

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet, Alert],
  template:`
<router-outlet></router-outlet>  
`,
  styles:``,
})
export class App {
  protected readonly title = signal('Registration-prj');

}
