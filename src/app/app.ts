import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "../login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  template:`

  <h1 class="center" > Benvenuto nella pagina, se sei registrato fai il login altrimenti registrati</h1>
<div class="button-container">
  <button (click)="loginClick()" class="button button-login">Login</button>
  <button (click)="regClick()" class="button button-registrati">Registrati</button>
</div>
  <router-outlet></router-outlet>
  `,
  styles:`
/* Contenitore dei bottoni con spaziatura */
.button-container {
  display: flex;
  gap: 16px; /* Spazio tra i bottoni */
  justify-content: center;
  margin-top: 40px;
}

/* Stile base per tutti i bottoni */
.button {
  padding: 12px 28px;
  font-size: 16px;
  font-family: 'Segoe UI', sans-serif;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 120px;
}

/* Bottone Login - elegante e neutro */
.button-login {
  background-color: #ffffff;
  color: #333333;
  border: 2px solid #333333;
}

.button-login:hover {
  background-color: #333333;
  color: #ffffff;
}

/* Bottone Registrati - accattivante e moderno */
.button-registrati {
  background-color: #0078D4;
  color: #ffffff;
  border: 2px solid #0078D4;
}

.button-registrati:hover {
  background-color: #005A9E;
  border-color: #005A9E;
}

.center{
text-align:center}
  `,
})
export class App {
  protected readonly title = signal('Registration-prj');
  
  loginClick(){
    console.log("login cliccato")
  }
  regClick(){
    console.log("registrazione cliccata")
  }
}
