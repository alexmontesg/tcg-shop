import ListingsSkeleton from "@/features/listings/components/skeletons/Listings";
import Listings from "@listings/components/Listings";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<ListingsSkeleton />}>
        <Listings />
      </Suspense>
    </main>
  );
}
