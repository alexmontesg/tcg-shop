"use server";

import { addListing } from "@/features/listings/services/listings";
import type { Listing } from "@/features/listings/types";

export default async function createListing(formData: FormData) {
  const listing: Listing = {
    /**
     * TODO revisit when adding db, should be added by db, probably create a DTO
     */
    id: crypto.randomUUID(),
    card: {
      /**
       * TODO revisit when adding db, should fetch an existing card
       */
      id: crypto.randomUUID(),
      name: String(formData.get("name")),
      game: String(formData.get("game")),
      expansionName: String(formData.get("expansionName")),
      imageUrl: "https://placehold.co/157x220.jpg",
      artist: "PLACEHOLDER",
      description: "PLACEHOLDER",
    },
    condition: String(formData.get("condition")),
    seller: String(formData.get("seller")),
    price: {
      amount: Number(formData.get("priceAmount")),
      currency: String(formData.get("currency")),
    },
  };

  return await addListing(listing);
}
