import { Routes } from '@angular/router';
import { AvailableGamesComponent } from './components/available-games/available-games.component';
import { LibraryComponent } from './components/library/library.component';

export const routes: Routes = [
    {
        path: '',
        component: AvailableGamesComponent
    },
    {
        path: 'library',
        component: LibraryComponent
    }
];
