import { Routes } from '@angular/router';
import { DigitComponent } from './components/digit/digit.component';
import { ClockComponent } from './components/clock/clock.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'clock',
        pathMatch: 'full'
    },
    // {
    //     path: 'digit',
    //     component: DigitComponent
    // },
    {
        path: 'clock',
        component: ClockComponent
    }
];
