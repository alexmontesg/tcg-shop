import { CardContainer } from "@/features/cards/components/CardContainer";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(props: PageProps) {
  const { id } = await props.params;

  // TODO: Add skeleton
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardContainer id={id} />
    </Suspense>
  );
}
