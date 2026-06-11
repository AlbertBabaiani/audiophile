import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((c) => c.Home),
    title: 'Audiophile - Home',
  },
  {
    path: 'headphones',
    loadComponent: () => import('./features/headphones/headphones').then((c) => c.Headphones),
    title: 'Audiophile - Headphones',
  },
  {
    path: 'speakers',
    loadComponent: () => import('./features/speakers/speakers').then((c) => c.Speakers),
    title: 'Audiophile - Speakers',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
