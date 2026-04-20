import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { GameDealsData } from '../shared/models/data.model';
import { computed } from '@angular/core';

export const GameStore = signalStore(
    { providedIn: 'root' },
    withState({
        games: [] as GameDealsData[],
        isLoading: false,
    }),

    withComputed((store) => ({
        gamesCount: computed(() => store.games().length)
    })),

    withMethods((store) => ({
        addGame(newGame: GameDealsData) {
            patchState(store, { 
                games: [...store.games(), newGame] 
            });
        },
        removeGame(gameId: string) {
            const updatedGames = store.games().filter((game: GameDealsData) => game.gameID !== gameId);
            patchState(store, { 
                games: updatedGames 
            });
        }
    }))
);