import { Routes } from '@angular/router';

export const PagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.page').then((c) => c.LayoutPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((c) => c.HomePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((c) => c.ProfilePage),
      },
      {
        path: 'watch-list',
        loadComponent: () =>
          import('./watch-list/watch-list.page').then((c) => c.WatchListPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
