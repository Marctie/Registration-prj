import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  template:``,
})
export class App {
  protected readonly title = signal('Registration-prj');
  
}
