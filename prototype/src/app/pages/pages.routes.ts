import { Routes } from "@angular/router";

export const PAGES_ROUTES: Routes = [
  {
    path: 'user-type',
    loadComponent: () => import('./profile-selection/profile-selection.component').then(c => c.ProfileSelectionComponent)
  }
]
