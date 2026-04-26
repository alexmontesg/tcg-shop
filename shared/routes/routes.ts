export const ROUTE_NAMES = {
  home: "home",
  card: "card",
  sell: "sell",
};

const ROUTES = {
  [ROUTE_NAMES.home]: "/",
  [ROUTE_NAMES.card]: ({ id }: { id: string }) => `card/${id}`,
  [ROUTE_NAMES.sell]: "/sell",
};

export function getRoute(
  name: keyof typeof ROUTES,
  pathParams?: Record<string, string>,
) {
  if (typeof ROUTES[name] === "string") {
    return ROUTES[name];
  }

  // @ts-expect-error TS can't infer type correctly
  return ROUTES[name](pathParams);
}
