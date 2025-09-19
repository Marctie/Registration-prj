import { JsonPipe } from '@angular/common';
import { Component, OnInit, computed, effect } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../servicies/auth-service';
import { FirstPage } from '../first-page';
import { Alert } from '../alert';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe, RouterLink, FirstPage, Alert],
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
        <button routerLink="/home" class="go-back-button" (click)="goBack()">Torna Indietro</button>
      </div>
    </div>

    @if (showModal){
    <app-alert [titolo]="titoloAlert ?? ''" [testo]="descrizioneAlert ?? ''"> </app-alert>
    }
    <!-- <pre>
      {{ userDataLogin() | json }}
    </pre
    > -->
  `,
  styles: `
 
`,
})
export class Login implements OnInit {
  //Variabili
  showModal: boolean = false;
  loginform: FormGroup = new FormGroup({});
  username: string | undefined;
  password: any;
  titoloAlert: string | undefined;
  descrizioneAlert: string | undefined;
  goBackButton = '';
  userDataLogin = computed(() => {
    const dataLogin = this.authService.userDataLogin();
    return dataLogin;
  });
  isAutenticated = computed(() => {
    return this.authService.authenticated();
  });
  //Costruttore
  constructor(
    private authService: AuthService,
    private router: Router,
    private root: ActivatedRoute
  ) {
    effect(
      ()=> {
        const isAuth=this.isAutenticated()
              if (this.isAutenticated()) {
        this.titoloAlert = 'Accesso completato';
        this.descrizioneAlert = 'Benvenuto';
        this.router.navigate(['/firstPage']);
      } else {
        this.titoloAlert = 'Accesso negato' ;
        this.descrizioneAlert = 'Controlla Username o password';

      }
      }
    )
  }

  //Funzioni
  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    console.log(this.root.snapshot.paramMap.get('username'));
  }

   onSubmit() {
    const user = this.loginform.value;
    user.id = user.id;
    this.authService.loginData(user);
    this.showModal = true;
      console.log(this.isAutenticated());
    console.log(user);
  }
  goBack() {}
}
