import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@listings/types";
import {
  Box,
  Button,
  Card,
  Grid,
  ThickChevronRightIcon,
} from "@radix-ui/themes";

import { formatPrice } from "@/shared/utils/price";
import { getRoute, ROUTE_NAMES } from "@/shared/routes/routes";

export default function Listing(props: Listing) {
  const { name, expansionName, imageUrl } = props.card;

  return (
    <Card>
      <Grid columns="3fr 2fr" gap="3">
        <Box gridColumn="1 / -1">
          <h2 className="text-xl">{name}</h2>
          <h3 className="text-l italic">{expansionName}</h3>
        </Box>
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
          <Link href={getRoute(ROUTE_NAMES.card, { id: props.card.id })}>
            <Button>
              Go to card <ThickChevronRightIcon />
            </Button>
          </Link>
        </div>
      </Grid>
    </Card>
  );
}
