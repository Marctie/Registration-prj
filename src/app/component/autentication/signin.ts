import { Component, OnInit, computed } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../servicies/auth-service";


@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, RouterLink],
   template:`
  <div class="login-wrapper">
  <form [formGroup]="registerform" (ngSubmit)="onSubmit()">
     <p>Inserisci il Nome:</p>
     <input type="name" formControlName="nome" />
     <p>Inserisci il cognome:</p>
     <input type="name" formControlName="cognome" />
     <p>username:</p>
     <input type="name" formControlName="username" />
     <p>password:</p>
     <input type="password" formControlName="password" />
     <button [disabled]="!registerform.valid">Registrati</button>
  </form>
  <div class="go-back-button-container">
    <button routerLink="/home" class="go-back-button" (click)="goBack()">Torna Indietro</button>
  </div>
</div> `,
})
export class Signin implements OnInit {
  //Variabili
  registerform: FormGroup = new FormGroup({});
  nome=''
  cognome:string | undefined;
  username: string | undefined;
  password: any;
  userDataReg = computed(() => {
    const dataReg = this.authService.userDataReg();
    return dataReg;
  });
  //Costruttore
  constructor(private authService: AuthService, private router:Router) {}

  //Funzioni
  ngOnInit(): void {
    this.registerform = new FormGroup({
      nome: new FormControl('', Validators.required),
      cognome: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.registerform)
     const user = this.registerform.value
     user.id=user.id
     this.authService.registrationData(user)
     console.log(user)
setTimeout(()=>{
  alert("Registrazione avvenuta! Puoi fare il Login")
  this.router.navigate(["/login"] );
},2000)
  }
  goBack() {}

}
