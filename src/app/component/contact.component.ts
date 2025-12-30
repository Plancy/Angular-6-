import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page">
      <h2>Контакти</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>380 99 99 99 99 99 </li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
    </div>
  `,
  styles: [`
    .page {
      padding: 20px;
    }
    h2 {
      color: #FF9800;
    }
    ul {
      line-height: 1.8;
    }
  `]
})
export class ContactComponent {}
