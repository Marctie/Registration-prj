import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Importa RouterLink per la navigazione

@Component({
  selector: 'app-error-page',
  imports: [RouterLink], 
  template: `
    <div class="error-container">
      <div class="error-content">
        <h1>404</h1>
        <h2>Oops! Pagina non trovata.</h2>
        <p>Sembra che la pagina che stai cercando non esista o sia stata spostata.</p>
        <p>Potresti voler tornare alla homepage o controllare l'URL.</p>
        <button routerLink="/home" class="home-button">Torna alla Homepage</button>
      </div>
    </div>
  `,
  styles: `
    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f8f9fa;
      font-family: 'Arial', sans-serif;
      text-align: center;
      padding: 20px;
    }

    .error-content {
      margin-bottom: 30px;
    }

    .error-content h1 {
      font-size: 8em;
      color: #dc3545; /* Rosso per l'errore */
      margin: 0;
      line-height: 1;
    }

    .error-content h2 {
      font-size: 2.5em;
      color: #343a40;
      margin-top: 10px;
    }

    .error-content p {
      font-size: 1.1em;
      color: #6c757d;
      line-height: 1.6;
      max-width: 600px;
      margin: 15px auto;
    }

    .home-button {
      background-color: #007bff; /* Blu per il bottone principale */
      color: white;
      padding: 12px 25px;
      border: none;
      border-radius: 5px;
      font-size: 1.1em;
      cursor: pointer;
      transition: background-color 0.3s ease;
      text-decoration: none; /* Rimuove la sottolineatura dal link */
      display: inline-block;
      margin-top: 20px;
    }

    .home-button:hover {
      background-color: #0056b3;
    }

    .error-illustration img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 768px) {
      .error-container {
        flex-direction: row;
        text-align: left;
        padding: 50px;
      }
      .error-content {
        margin-right: 50px;
        margin-bottom: 0;
      }
      .error-illustration {
        flex-shrink: 0;
      }
    }
  `
})

export class ErrorPage {

}
