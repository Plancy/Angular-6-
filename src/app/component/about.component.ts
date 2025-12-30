import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <div class="page">
      <h2>Про нас</h2>
      <p>Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet</p>
      <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
    </div>
  `,
    styles: [`
    .page {
      padding: 20px;
    }
    h2 {
      color: #4CAF50;
    }
    ul {
      line-height: 1.8;
    }
  `]
})
export class AboutComponent { }
