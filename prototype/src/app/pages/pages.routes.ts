import { Routes } from '@angular/router'

export const PAGES_ROUTES: Routes = [
  {
    path: 'user-type',
    loadComponent: () =>
      import('./profile-selection/profile-selection.component').then(
        (c) => c.ProfileSelectionComponent
      ),
  },
  {
    path: 'ride-selection',
    loadComponent: () =>
      import('./ride-selection/ride-selection.component').then(
        (c) => c.RideSelectionComponent
      ),
  },
]
