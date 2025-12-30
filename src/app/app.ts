import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="container">
      <header>
        <h1> {{ title() }}</h1>
      </header>
      
      <nav>
        <a routerLink="/home" routerLinkActive="active">Головна</a>
        <a routerLink="/about" routerLinkActive="active">Про нас</a>
        <a routerLink="/contact" routerLinkActive="active">Контакти</a>
      </nav>

      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
    }
    
    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    
    header h1 {
      margin: 0;
      font-size: 2em;
    }
    
    nav {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 30px;
    }
    
    nav a {
      padding: 12px 24px;
      text-decoration: none;
      color: #333;
      background: #f0f0f0;
      border-radius: 5px;
      transition: all 0.3s;
    }
    
    nav a:hover {
      background: #e0e0e0;
      transform: translateY(-2px);
    }
    
    nav a.active {
      background: #667eea;
      color: white;
    }
    
    main {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      min-height: 300px;
    }
  `],
})
export class App {
  protected readonly title = signal('Щось цікаве');
}
