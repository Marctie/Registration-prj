import { Component, computed, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../servicies/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe],
  template:`
   <form [formGroup]="loginform" (ngSubmit)="onSubmit()">
      <p>username:</p>
      <input type="name" formControlName="username" />
      <p>password:</p>
      <input type="password" formControlName="password" />
      <button [disabled]="!loginform.valid">Login</button>
    </form>

      <pre>
      {{ userDataLogin() | json }}
    </pre>
  `,
})
export class Login implements OnInit{
//Variabili 
  loginform: FormGroup = new FormGroup({});
  username: string | undefined;
  password: any;
  userDataLogin = computed(() => {
    const dataLogin = this.authService.userDataLogin()
    return dataLogin;
  });
//Costruttore
  constructor(private authService:AuthService){}

  //Funzioni
  ngOnInit(): void {
this.loginform = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
})
  }

  onSubmit(){

  }

}
