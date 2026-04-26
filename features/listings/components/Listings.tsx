import Listing from "@listings/components/Listing";
import { getListings } from "@listings/services/listings";
import { Grid } from "@radix-ui/themes";

export default async function ListingssPage() {
  const listings = await getListings();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      {listings.map((listing) => (
        <Listing {...listing} key={listing.id} />
      ))}
    </Grid>
  );
}
