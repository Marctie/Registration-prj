import { Component, inject, output } from "@angular/core"
import { RouterLink, Router } from "@angular/router"
import { AuthService } from "../servicies/auth-service"
import { Balance } from "./balance";


@Component({
  selector: 'app-first-page',
  imports: [RouterLink, Balance],
   template:`
     <!--passaggio del dato dal servizio al child di riferimento -->
   @defer(when authService.userLogin()){
 <section class="hero-section">
  <div class="hero-content">
    <h1>Ciao, {{authService.userLogin().username}} sei arrivato finalmente!</h1>
    <p>Siamo felici di averti qui. Esplora le nostre fantastiche funzionalità.</p>
    <!-- passaggio del dato alla funzione per ottenere solo lo username -->
    <button class="logout-button"  (click)="onLogout(authService.userLogin().username)">Logout</button>
    <button (click)="onPress()" class="logout-button-green" >Visualizza Saldo</button>
  </div>
</section>
<!-- aggiunta del componente per mostrare il saldo al click del bottone precedente --> 
<section>
  <app-balance></app-balance>
</section>
}
<!-- TODO: ricordati di fare in modo che nel back non ti mostri una sessione ancora "loggata" -->
   
   `,
styles:`

.hero-section {
  background: linear-gradient(to right, #6dd5ed, #2193b0); /* Sfondo sfumato */
  color: white;
  text-align: center;
  padding: 100px 20px;
  border-bottom-left-radius: 50% 20%; /* Curva in basso a sinistra */
  border-bottom-right-radius: 50% 20%; /* Curva in basso a destra */
  margin-bottom: 50px;
}

.hero-content h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.cta-button {
  background-color: #ffaa00;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e69500;
}

.logout-button {
  background-color: #dc3545; /* Rosso per il logout */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;
}

  .logout-button-green{
  background-color:green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #c82333;
}

.features-section {
  text-align: center;
  padding: 50px 20px;
  background-color: #f8f8f8;
}

.features-section h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-card i {
  font-size: 3em;
  color: #2193b0;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.feature-card p {
  color: #666;
}

.call-to-action-bottom {
  text-align: center;
  padding: 80px 20px;
  background-color: #e9ecef;
  margin-top: 50px;
}

.call-to-action-bottom h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.call-to-action-bottom p {
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #555;
}

/* Stili per le icone (se usi Font Awesome) */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

`,
})
export class FirstPage {
  authService= inject(AuthService)
  goodbye = output<string>()
  router=inject(Router)

  // passaggio del dato da html alla funzione (pero solo username)
  onLogout(nameuser:string){
  // this.goodbye.emit("Grazie per averci scelto" + this.authService.userLogin())
this.authService.authenticated.set(false)
  this.goodbye.emit("Grazie per averci scelto" + nameuser)
  console.log("click avvenuto")
  this.router.navigate(["/login", "marco"] );
}

onPress(){
  this.router.navigate(["/balance"]);
}



}
