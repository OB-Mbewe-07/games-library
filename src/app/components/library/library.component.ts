import { Component, inject } from "@angular/core";
import { GameStore } from "../../store/library.store";
import { CommonModule, DecimalPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-library',
    standalone: true,
    templateUrl: './library.component.html',
    imports: [CommonModule, DecimalPipe, RouterLink]
})
export class LibraryComponent{
    readonly store = inject(GameStore);

    isInLibrary(gameId: string): boolean {
        return this.store.games().some(g => g.gameID === gameId);
    }
}