import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(x => x.AUTH_ROUTES)
    },
    {
        path: 'inicio',
        loadChildren: () => import('./home/home.routes').then(x => x.HOME_ROUTES)
    }
];
