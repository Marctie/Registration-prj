import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router';
import { AuthService } from '../servicies/auth-service';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-balance',
  imports: [CommonModule],
  template: `
    <section class="balance-container">
      <div class="card">
        <h2>Il tuo saldo attuale</h2>
        <p class="balance-amount">€ 1.234,56</p>
        <div class="account-info">
          <p>Conto Corrente: **** 1234</p>
          <p>Titolare:{{user.nome}} {{user.cognome}}</p>
        </div>
      </div>
       <button (click)="backButton()" class="back-button">Torna indietro</button>
    </section>
  `,
  styles: [`
    .balance-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh; /* Fa in modo che il container occupi l'intera altezza della viewport */
      background-color: #f0f2f5; /* Un leggero sfondo grigio */
      font-family: Arial, sans-serif;
      padding: 20px;
      box-sizing: border-box; /* Include padding nel calcolo della larghezza/altezza */
    }

    .card {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 30px 40px;
      text-align: center;
      max-width: 450px;
      width: 100%;
      margin-bottom: 30px;
    }

    h2 {
      color: #333333;
      margin-bottom: 20px;
      font-size: 1.8em;
      font-weight: 600;
    }

    .balance-amount {
      color: #28a745; /* Verde per il saldo, tipico delle banche */
      font-size: 3.5em;
      font-weight: bold;
      margin-bottom: 25px;
      letter-spacing: -1px;
    }

    .account-info {
      border-top: 1px solid #eeeeee;
      padding-top: 20px;
      margin-top: 25px;
      color: #666666;
      font-size: 0.95em;
      line-height: 1.6;
    }

    .account-info p {
      margin: 5px 0;
    }

    .back-button {
      background-color: #007bff; /* Blu per il bottone */
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 8px;
      font-size: 1.1em;
      cursor: pointer;
      transition: background-color 0.3s ease;
      box-shadow: 0 2px 6px rgba(0, 123, 255, 0.2);
    }

    .back-button:hover {
      background-color: #0056b3;
    }

    /* Media query per schermi più piccoli */
    @media (max-width: 600px) {
      .card {
        padding: 25px 30px;
        margin-bottom: 25px;
      }

      h2 {
        font-size: 1.5em;
        margin-bottom: 15px;
      }

      .balance-amount {
        font-size: 2.8em;
        margin-bottom: 20px;
      }

      .account-info {
        font-size: 0.9em;
        padding-top: 15px;
        margin-top: 20px;
      }

      .back-button {
        padding: 10px 20px;
        font-size: 1em;
      }
    }
  `]
})
export class Balance implements OnInit {

  router=inject(Router)
  authService= inject(AuthService)
user:IUser = {} as IUser 

  backButton(){
  this.router.navigate(["/firstPage"]);
  console.log(this.authService.userBalance())
  }

    ngOnInit(): void {
      setTimeout(()=>{
        this.authService.getUser(this.authService.userLogin().id).subscribe(
  response => this.user = response
)
      }, 2000)

    }

}
