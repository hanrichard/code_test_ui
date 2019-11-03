export function formatDateTimeToLocale(date) {
  const dateTime = new Date(date);
  return dateTime.toLocaleDateString("en-GB");
}
