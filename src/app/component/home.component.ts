import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page">
      <h2>Головна</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  `,
  styles: [`
    .page {
      padding: 20px;
    }
    h2 {
      color: #2196F3;
    }
  `]
})
export class HomeComponent {}
