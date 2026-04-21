import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { DataFetchService } from "../../shared/services/data.service";
import { GameDealsData } from "../../shared/models/data.model";
import { Subscription } from "rxjs";
import { CommonModule, DecimalPipe } from "@angular/common";
import { GameStore } from "../../store/library.store";
import { RouterOutlet } from "@angular/router";

@Component({
    selector : 'app-available',
    standalone: true,
    templateUrl: './available-games.component.html',
    imports: [CommonModule, DecimalPipe]
})
export class AvailableGamesComponent implements OnInit , OnDestroy{
    private gamesDataClass = inject(DataFetchService);
    readonly store = inject(GameStore);
    private subscription = new Subscription;
    gamesData : GameDealsData[] = [];
    private cdr = inject(ChangeDetectorRef);

    ngOnInit(): void {
        this.subscription.add(
            this.gamesDataClass.getDeals().subscribe({
                next: (data) => {
                    this.gamesData = data; 
                    console.log('data: ',data);
                    this.cdr.detectChanges()
                },
                error: (err) =>{
                    console.error(err); 
                },
            })
        );
    };

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    } 

    isInLibrary(gameId: string): boolean {
        return this.store.games().some(g => g.gameID === gameId);
    }
};