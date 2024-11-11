import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'chicken',
    loadComponent: () => import('./pages/chicken/chicken.page').then( m => m.ChickenPage)
  },
  {
    path: 'country',
    loadComponent: () => import('./pages/by-country/by-country.page').then( m => m.ByCountryPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
