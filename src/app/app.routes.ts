import {Routes, RouterModule, provideRouter} from '@angular/router';
import { NgModule } from '@angular/core';

// Import your components
import { LoginComponent } from './auth/login/login-component/login-component.component';
import { RegisterComponent } from './auth/register/register-component/register-component.component';
import {UserListComponent} from './user-list/user-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' } // Wildcard to handle unknown paths
];

export const appRoutingProviders = [
  provideRouter(routes)
];
