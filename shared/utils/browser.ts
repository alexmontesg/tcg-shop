export function getUserLocale() {
  return navigator.languages?.[0] || navigator.language;
}
