type FormatPriceParams = { amount: number; currency: string; locale?: string };
import { getUserLocale } from "@utils/browser";

export function formatPrice(props: FormatPriceParams) {
  const defaultParams = {
    locale: getUserLocale(),
  };

  const { amount, currency, locale } = {
    ...defaultParams,
    ...props,
  };

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
