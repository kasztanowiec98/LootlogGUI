import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth-service.service';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  imports: [FormsModule,CommonModule],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      (response) => {
        this.authService.saveToken(response.token); // Save token to cookies
        this.router.navigate(['/user-list']); // Navigate after successful login
      },
      () => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
