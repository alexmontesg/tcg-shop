import listings from "@listings/mocks/listings.json";
import type { Listing } from "@listings/types";

export async function getListings() {
  await new Promise((r) => setTimeout(r, 1000)); // Simulate delay
  return listings;
}

export async function addListing(listing: Listing) {
  console.log(`New listing: ${JSON.stringify(listing)}`);
}
