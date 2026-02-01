export function showDate(utcDate: number) {
  return new Date(utcDate).toLocaleDateString();
}
