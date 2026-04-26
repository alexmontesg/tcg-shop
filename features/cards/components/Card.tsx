import Image from "next/image";
import { Grid } from "@radix-ui/themes";

import type { Card } from "@cards/types";

export default function Card(props: Card) {
  return (
    <Grid columns="3fr 2fr" gap="3">
      <header className="col-span-full">
        <h2 className="text-xl">{props.name}</h2>
        <h3 className="text-l italic">{props.game}</h3>
      </header>
      <aside>
        <Image src={props.imageUrl} alt={props.name} width={157} height={220} />
      </aside>
      <div>
        <dl>
          <dt className="font-semibold">Set Name</dt>
          <dd>{props.expansionName}</dd>
          <dt className="font-semibold">Artist</dt>
          <dd>{props.artist}</dd>
        </dl>
      </div>
      <footer className="col-span-full">{props.description}</footer>
    </Grid>
  );
}
