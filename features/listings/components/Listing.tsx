import Image from "next/image";

import type { Listing } from "@listings/types";
import { formatPrice } from "@/shared/utils/price";

export default function Listing(props: Listing) {
  const { name, expansionName, imageUrl } = props.card;

  return (
    <article className="grid grid-cols-[2fr_3fr] my-5 mx-5 gap-5">
      <header className="col-span-full">
        <h2 className="text-xl">{name}</h2>
        <h3 className="text-l italic">{expansionName}</h3>
      </header>
      <aside>
        <Image src={imageUrl} alt={name} width={157} height={220} />
      </aside>
      <div>
        <dl>
          <dt className="font-semibold">Seller</dt>
          <dd>{props.seller}</dd>
          <dt className="font-semibold">Price</dt>
          <dd>{formatPrice(props.price)}</dd>
        </dl>
      </div>
    </article>
  );
}
