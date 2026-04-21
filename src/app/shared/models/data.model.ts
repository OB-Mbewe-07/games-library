export interface GameDealsData {
    dealID: string;
    dealRating: string;
    gameID: string;
    internalName: string;
    isOnSale: string;
    lastChange: number;
    metacriticLink: string;
    metacriticScore: string;
    normalPrice: string;
    releaseDate: number;
    salePrice: string;
    savings: string;
    steamAppID: string;
    steamRatingCount: string;
    steamRatingPercent: string;
    steamRatingText: string;
    storeID: string;
    thumb: string;
    title: string;
}

interface GameDeal {
  storeID: string;
  dealID: string;
  price: string;       
  retailPrice: string;
  savings: string;     
}


interface CheapestPrice {
  price: string;
  date: number;        
}

interface GameInfo {
  title: string;
  steamAppID: string | null; 
  thumb: string;           
}

export interface GameLookupResponse {
  info: GameInfo;
  cheapestPriceEver: CheapestPrice;
  deals: GameDeal[];
}