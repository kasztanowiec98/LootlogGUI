import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AuthInterceptor } from './app/auth.interceptor';
import { routes } from './app/app.routes';
import { CookieService } from 'ngx-cookie-service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([AuthInterceptor])), // Use the interceptor
    provideRouter(routes), // Provide routing
    { provide: CookieService, useClass: CookieService }, // Provide CookieService explicitly
  ],
}).catch((err) => console.error(err));
