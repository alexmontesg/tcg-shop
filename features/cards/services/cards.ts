import cards from "@cards/mocks/cards.json";
import { Card } from "@cards/types";

export async function getCards(): Promise<Array<Card>> {
  return Promise.resolve(cards);
}

export async function getCardById(id: string) {
  const cards = await getCards();
  return cards.find((c) => c.id === id);
}
