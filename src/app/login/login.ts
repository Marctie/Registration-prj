import { Component, computed, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../servicies/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
  <div class="login-wrapper">
  <form [formGroup]="loginform" (ngSubmit)="onSubmit()">
     <p>username:</p>
     <input type="name" formControlName="username" />
     <p>password:</p>
     <input type="password" formControlName="password" />
     <button [disabled]="!loginform.valid">Login</button>
  </form>
  <div class="go-back-button-container">
    <button class="go-back-button" (click)="goBack()"> <- torna indietro </button>
  </div>
</div>
    <!-- <pre>
      {{ userDataLogin() | json }}
    </pre
    > -->
  `,
  styles: `
/* Stili globali per centrare il contenuto e impostare un reset minimo */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Assicura che padding e border non aumentino la dimensione totale */
}

body {
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Un font pulito e moderno */
  display: flex;
  justify-content: center; /* Centra orizzontalmente */
  align-items: center; /* Centra verticalmente */
  min-height: 100vh; /* Assicura che il body occupi tutta l'altezza della viewport */
  background-color: #f8f8f8; /* Sfondo molto chiaro quasi bianco */
  color: #333; /* Colore del testo principale */
}

/* Container principale per la form e il bottone (se vuoi centrarli insieme) */
/* Se hai già un container come suggerito nella Opzione 2 precedente, usa quello.
   Altrimenti, questo servirà per raggruppare visivamente form e bottone. */
.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra gli elementi all'interno del wrapper */
  gap: 25px; /* Spazio tra la form e il bottone "torna indietro" */
  width: 100%;
  max-width: 400px; /* Limita la larghezza massima del wrapper */
  padding: 20px; /* Padding generale per schermi più piccoli */
  box-sizing: border-box;
}


/* Stile per il container della form */
form {
  background-color: #ffffff;
  padding: 35px 40px; /* Spazio interno generoso */
  border-radius: 8px; /* Angoli leggermente arrotondati */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* Ombra molto sottile */
  border: 1px solid #e0e0e0; /* Bordo sottile e discreto */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Spazio tra i gruppi di input */
  width: 100%; /* La form occupa tutta la larghezza disponibile nel suo wrapper */
  box-sizing: border-box;
}

/* Stile per i paragrafi (etichette) */
form p {
  margin: 0;
  color: #555; /* Un grigio scuro per le etichette */
  font-weight: 500; /* Leggermente più audace */
  font-size: 0.9em;
  text-transform: uppercase; /* Testo in maiuscolo per un look pulito */
  letter-spacing: 0.8px; /* Spaziatura leggera tra le lettere */
}

/* Stile per gli input */
form input[type="name"],
form input[type="password"] {
  width: 100%;
  padding: 12px 10px;
  border: 1px solid #d0d0d0; /* Bordo sottile */
  border-radius: 5px; /* Angoli leggermente arrotondati */
  font-size: 1em;
  color: #333;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  background-color: #fafafa; /* Sfondo leggermente grigio per gli input */
}

form input[type="name"]:focus,
form input[type="password"]:focus {
  border-color: #888; /* Bordo grigio più scuro al focus */
  box-shadow: 0 0 0 1px rgba(136, 136, 136, 0.2); /* Sottile ombra al focus */
  outline: none; /* Rimuove il focus outline predefinito del browser */
  background-color: #ffffff; /* Sfondo bianco al focus */
}

/* Stile per il bottone di Login */
form button {
  background-color: #4CAF50; /* Verde soft per l'azione primaria */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  margin-top: 15px; /* Spazio sopra il bottone */
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-sizing: border-box;
}

form button:hover:not(:disabled) {
  background-color: #45a049; /* Verde leggermente più scuro all'hover */
  transform: translateY(-1px); /* Leggero sollevamento */
}

form button:disabled {
  background-color: #a5d6a7; /* Verde più chiaro e disabilitato */
  cursor: not-allowed;
  opacity: 0.7;
}

/* Stile per il bottone "Torna indietro" */
.go-back-button-container {
  /* Questo div è incluso nel login-wrapper, non ha bisogno di specifici margini esterni */
}

.go-back-button {
  background: none; /* Nessuno sfondo */
  color: #777; /* Testo grigio */
  padding: 10px 15px;
  border: 1px solid #ccc; /* Bordo sottile */
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.go-back-button:hover {
  background-color: #e8e8e8; /* Sfondo leggermente grigio all'hover */
  border-color: #b0b0b0;
  color: #333;
}
`,
})
export class Login implements OnInit {
  //Variabili
  loginform: FormGroup = new FormGroup({});
  username: string | undefined;
  password: any;
  userDataLogin = computed(() => {
    const dataLogin = this.authService.userDataLogin();
    return dataLogin;
  });
  //Costruttore
  constructor(private authService: AuthService) {}

  //Funzioni
  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {}
  goBack() {}
}
