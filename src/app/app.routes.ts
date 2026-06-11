import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((c) => c.Home),
  },
  {
    path: 'headphones',
    loadComponent: () => import('./features/headphones/headphones').then((c) => c.Headphones),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
