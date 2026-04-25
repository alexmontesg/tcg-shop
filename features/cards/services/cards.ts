import cards from "@/features/cards/mocks/cards.json";

export async function getCards() {
  return Promise.resolve(cards);
}
