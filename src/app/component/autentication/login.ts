import { JsonPipe } from "@angular/common";
import { Component, OnInit, computed } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../servicies/auth-service";
import { FirstPage } from "../first-page";


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe, RouterLink, FirstPage],
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
  loginform: FormGroup = new FormGroup({});
  username: string | undefined;
  password: any;
  userDataLogin = computed(() => {
    const dataLogin = this.authService.userDataLogin();
    return dataLogin;
  });
  //Costruttore
  constructor(
    private authService: AuthService,
    private router: Router,
    private root: ActivatedRoute
  ) {}

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
    console.log(user);
  }
  goBack() {

  }
}
