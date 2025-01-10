import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://cypis-ll.pl/auth'; // Update to your API base URL

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(data: { username: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/authenticate`, data);
  }

  register(data: { username: string; password: string; passwordConfirmation: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  saveToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token'); // Retrieve the token from localStorage
  }

  logout(): void {
    localStorage.removeItem('jwt_token'); // Remove the token from localStorage
  }
}
