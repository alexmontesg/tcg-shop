import Link from "next/link";
import { Button } from "@radix-ui/themes";

import ListingsSkeleton from "@/features/listings/components/skeletons/Listings";
import Listings from "@listings/components/Listings";
import { Suspense } from "react";
import { getRoute, ROUTE_NAMES } from "@/shared/routes/routes";

export default async function Page() {
  return (
    <main>
      <header className="flex mbe-12 mbs-8 gap-12">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Search..."
        />

        <Link href={getRoute(ROUTE_NAMES.sell)}>
          <Button size="4">Sell</Button>
        </Link>
      </header>
      <Suspense fallback={<ListingsSkeleton />}>
        <Listings />
      </Suspense>
    </main>
  );
}
