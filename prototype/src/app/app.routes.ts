import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './pages/auth/auth.routes';
import { PAGES_ROUTES } from './pages/pages.routes';

export const routes: Routes = [
    {
        path: 'auth',
        children: [...AUTH_ROUTES]
    },
    {
        path: 'pages',
        children: [...PAGES_ROUTES]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];
