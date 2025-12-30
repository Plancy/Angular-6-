import { Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { AboutComponent } from './component/about.component';
import { ContactComponent } from './component/contact.component';
import { UsersComponent } from './component/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UsersComponent }
];