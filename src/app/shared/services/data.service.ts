import { HttpClient } from "@angular/common/http";
import { inject, Injectable, OnInit } from "@angular/core";
import { GameDealsData } from "../models/data.model";
import { shareReplay } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataFetchService{
    private http = inject(HttpClient);
    private apiUrl = 'https://www.cheapshark.com/api/1.0/deals';

    private deals$ = this.http.get<GameDealsData[]>(this.apiUrl).pipe(
        shareReplay(1) 
    );

    getDeals() {
        return this.deals$;
    }
}