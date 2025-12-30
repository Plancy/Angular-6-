import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <h2>Список користувачів</h2>
      
      <div class="users">
        @for (user of users; track user.id) {
          <div class="card">
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
            <p>{{ user.phone }}</p>
            <p>{{ user.company.name }}</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page {
      padding: 20px;
    }
    
    h2 {
      color: #667eea;
      margin-bottom: 20px;
    }
    
    .users {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    
    .card {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    
    .card h3 {
      margin: 0 0 10px 0;
      color: #333;
    }
    
    .card p {
      margin: 5px 0;
      color: #666;
    }
  `]
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data);
  }
}