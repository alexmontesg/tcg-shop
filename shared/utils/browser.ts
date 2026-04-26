export function getUserLocale() {
  if (typeof navigator === "undefined") return "en-US"; // For SSR

  return navigator.languages?.[0] || navigator.language;
}
