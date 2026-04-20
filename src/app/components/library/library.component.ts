import { Component, inject } from "@angular/core";
import { GameStore } from "../../store/library.store";
import { CommonModule, DecimalPipe } from "@angular/common";

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    imports: [CommonModule, DecimalPipe]
})
export class LibraryComponent{
    readonly store = inject(GameStore);

    isInLibrary(gameId: string): boolean {
        return this.store.games().some(g => g.gameID === gameId);
    }
}