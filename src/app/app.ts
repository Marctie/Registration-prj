import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet,  } from '@angular/router';
import { Login } from "./login/login";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet],
  template:`
<router-outlet></router-outlet>  
`,
  styles:``,
})
export class App {
  protected readonly title = signal('Registration-prj');

}
