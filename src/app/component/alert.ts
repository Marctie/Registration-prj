import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],    
  template: `
    <div class="alert-container">
      <h1 class="alert-title">{{ titolo() }}</h1> 
      <p class="alert-text">{{ testo() }}</p>
      <button style="color:white" class="go-back-button greenbtn">Continua</button>
      <button style="color:white" class="go-back-button blackbtn" (click)="ricaricaPagina()">Annulla</button>
    </div>
  `,
  styles: `
    .alert-container {
      position: absolute;
      top: 24%;
      left: 42%;
      background-color: red;
      color: white;           
      padding: 15px 25px;     
      border-radius: 8px;     
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
      z-index: 100;          
      text-align: center;
      width: 14%;
      max-width: 50%;   
      height:auto      
    }

    .alert-title {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 1.8em;     
      color: #f0f0f0;        
    }

    .alert-text {
      margin-bottom: 0;
      font-size: 1.1em;     
      line-height: 1.5;      
    }
    .greenbtn{
      background-color:green;
      margin: 0px 10px;
    }
    .blackbtn{
      background-color:black
    }
  `
})
export class Alert {
  titolo = input.required<string>(); 
  testo = input<string>('Questo è il testo predefinito di un messaggio di avviso.');
  
  ricaricaPagina(){
    window.location.reload();
  }
}