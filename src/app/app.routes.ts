import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Mainpage } from './mainpage/mainpage';
import { Details2 } from './mainpage/details2/details2';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'mainpage', component: Mainpage },
  { path: 'details2', component:Details2 },
];
