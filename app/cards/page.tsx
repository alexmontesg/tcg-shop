import Card from "@cards/components/Card";
import { getCards } from "@cards/services/cards";

export default async function CardsPage() {
  const cards = await getCards();

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <Card {...card} key={card.name} />
      ))}
    </div>
  );
}
