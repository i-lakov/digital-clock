import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), DatePipe]
};
