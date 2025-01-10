import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService); // Inject CookieService

  const token = cookieService.get('auth_token'); // Get token from cookies

  if (token) {
    // Clone the request to add the Authorization header
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
