import { Routes } from '@angular/router';
import { AvailableGamesComponent } from './components/available-games/available-games.component';
import { LibraryComponent } from './components/library/library.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

export const routes: Routes = [
    {
        path: '',
        component: AvailableGamesComponent,
        children: [{
            path: ':id',
            component: GameDetailsComponent
        }]
    },
    {
        path: 'library',
        component: LibraryComponent
    }
];
