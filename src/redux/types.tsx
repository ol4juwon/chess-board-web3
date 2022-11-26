export type Games = {
    id: number;
    entryFee: number;
    privacy: string;
    limit: number;
    created_on: string;
    ended: boolean;
    currency: string;
    winner?: string;
    date_ended?: string;
  };
export interface GameState {
    games: Games[];
  }

  export type User = {
    address: string;
    balance: number;
  }