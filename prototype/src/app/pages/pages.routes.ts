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
  {
    path: 'ride-track',
    loadComponent: () =>
      import('./ride-track/ride-track.component').then(
        (c) => c.RideTrackComponent
      ),
  },
  {
    path: 'ride-rating',
    loadComponent: () =>
      import('./ride-rating/ride-rating.component').then(
        (c) => c.RideRatingComponent
      ),
  },
]
