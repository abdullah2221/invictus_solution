import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

// Add this line to provide HttpClient globally
export const appProviders = [
  provideClientHydration(),
  provideHttpClient(),  // <-- This is mandatory
  provideAnimations(),
  provideToastr(),
];

bootstrapApplication(AppComponent, {
  providers: [
    ...appProviders,
    ...(appConfig.providers || []),
  ]
}).catch((err) => console.error(err));