import Listing from "@listings/components/Listing";
import { getListings } from "@listings/services/listings";

export default async function ListingssPage() {
  const listings = await getListings();

  return (
    <div className="grid grid-cols-2 gap-4">
      {listings.map((listing) => (
        <Listing {...listing} key={listing.id} />
      ))}
    </div>
  );
}
