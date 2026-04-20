import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { GameDealsData } from "../models/data.model";

@Injectable({
    providedIn: 'root'
})
export class DataFetchService {
    private http = inject(HttpClient);
    private apiUrl = 'https://www.cheapshark.com/api/1.0/deals'

    getDeals() {
        return this.http.get<GameDealsData[]>(`${this.apiUrl}`);
    }
}