import { getCardById } from "@cards/services/cards";
import Card from "@cards/components/Card";

export async function CardContainer(props: { id: string }) {
  const card = await getCardById(props.id);
  if (!card) {
    return; // TODO Make card not found component
  }

  return <Card {...card} />;
}
