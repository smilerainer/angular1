import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Mainpage } from './mainpage/mainpage';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'mainpage', component: Mainpage },
];
