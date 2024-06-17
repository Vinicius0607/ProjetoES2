import { Routes } from '@angular/router'

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'setup-account',
    loadComponent: () =>
      import('./setup-account/setup-account.component').then(
        (c) => c.SetupAccountComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
]
