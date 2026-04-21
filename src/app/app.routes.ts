import { Routes } from '@angular/router';
import { AvailableGamesComponent } from './components/available-games/available-games.component';
import { LibraryComponent } from './components/library/library.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

export const routes: Routes = [
    {
        path: '',
        component: AvailableGamesComponent,
    },
    {
        path: 'library',
        component: LibraryComponent
    },
    {
        path: 'game/:id',
        component: GameDetailsComponent
    },
];
