import { getCardById } from "@cards/services/cards";
import Card from "@cards/components/Card";
import { notFound } from "next/navigation";

export async function CardContainer(props: { id: string }) {
  const card = await getCardById(props.id);
  if (!card) {
    return notFound();
  }

  return <Card {...card} />;
}
