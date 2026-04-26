import { Button } from "@radix-ui/themes";

export default async function Page() {
  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl mb-6">Sell a Card</h1>
      <form className="space-y-4" method="POST">
        <label className="block">
          <span className="block text-sm font-medium mb-1">Card</span>
          <input
            type="text"
            name="name"
            required
            className="w-full border p-2 rounded"
            placeholder="Pikachu, Gengar..."
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Game</span>
          <select
            name="condition"
            required
            className="w-full border p-2 rounded"
            defaultValue=""
          >
            <option value="" disabled className="hidden">
              Select game...
            </option>
            <option value="Pokemon">Pokemon</option>
            <option value="Yugioh">Yu-Gi-Oh</option>
            <option value="MTG">Magic the Gathering</option>
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Set Name</span>
          <input
            type="text"
            name="expansionName"
            required
            className="w-full border p-2 rounded"
            placeholder="Base Set, Fossil..."
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Condition</span>
          <select
            name="condition"
            required
            className="w-full border p-2 rounded"
            defaultValue=""
          >
            <option value="" disabled className="hidden">
              Select condition...
            </option>
            <option value="Mint">Mint</option>
            <option value="Near Mint">Near Mint</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Seller</span>
          <input
            type="text"
            name="seller"
            required
            className="w-full border p-2 rounded"
            placeholder="Your name"
          />
        </label>

        <div className="flex gap-4">
          <label className="block flex-1">
            <span className="block text-sm font-medium mb-1">Price</span>
            <input
              type="number"
              name="priceAmount"
              required
              min="0"
              step="0.01"
              className="w-full border p-2 rounded"
              placeholder="0.00"
            />
          </label>

          <label className="block w-24">
            <span className="block text-sm font-medium mb-1">Currency</span>
            <select
              name="currency"
              required
              className="w-full border p-2 rounded"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </label>
        </div>

        <Button type="submit" size="4">
          Create Listing
        </Button>
      </form>
    </div>
  );
}
