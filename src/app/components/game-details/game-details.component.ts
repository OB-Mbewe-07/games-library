import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { DataFetchService } from "../../shared/services/data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { GameLookupResponse } from "../../shared/models/data.model";

@Component({
    selector: 'app-details',
    templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit , OnDestroy{
    private api = inject(DataFetchService);
    private route = inject(ActivatedRoute);
    private cdr = inject(ChangeDetectorRef);
    private subscription = new Subscription;
    gameDetails : GameLookupResponse | null = null

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.subscription.add(
            this.api.getGameDetails(Number(id)).subscribe({
                next: (data) => {
                    this.gameDetails = data;
                    this.cdr.detectChanges();
                },
                error: (err) =>{
                    console.error(err);
                }
            })
        );
    };

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    };
}