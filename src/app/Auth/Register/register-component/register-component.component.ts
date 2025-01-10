import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth-service.service';
import {CommonModule} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
  imports: [FormsModule,CommonModule], // Important: Import FormsModule
})
export class RegisterComponent {
  username = '';
  password = '';
  passwordConfirmation = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.passwordConfirmation) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.authService.register({
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    }).subscribe({
      next: () => {
        this.successMessage = 'Registration successful!';
        this.errorMessage = '';
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration error:', err); // Log error for debugging
        this.errorMessage = 'Failed to register. Try again later.';
      },
    });
  }
}
