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
    path: 'earphones',
    loadComponent: () => import('./features/earphones/earphones').then((c) => c.Earphones),
    title: 'Audiophile - Earphones',
  },
  {
    path: 'headphones/:slug',
    loadComponent: () =>
      import('./features/product-detail/product-detail').then((c) => c.ProductDetail),
    title: 'Audiophile - Headphones',
  },
  {
    path: 'speakers/:slug',
    loadComponent: () =>
      import('./features/product-detail/product-detail').then((c) => c.ProductDetail),
    title: 'Audiophile - Speakers',
  },
  {
    path: 'earphones/:slug',
    loadComponent: () =>
      import('./features/product-detail/product-detail').then((c) => c.ProductDetail),
    title: 'Audiophile - Earphones',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
