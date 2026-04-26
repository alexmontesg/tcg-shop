import type { Card } from "@cards/types";

export type Listing = {
  id: string;
  card: Card;
  condition: string;
  seller: string;
  price: {
    amount: number;
    currency: string;
  };
};
