import listings from "@listings/mocks/listings.json";

export async function getListings() {
  await new Promise((r) => setTimeout(r, 1000)); // Simulate delay
  return listings;
}
