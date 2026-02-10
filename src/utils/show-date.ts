export function showDate(utcDate: number) {
  return new Date(utcDate).toLocaleDateString();
}

export function showCompletedDate(utcDate: number) {
  return utcDate ? showDate(utcDate) : "Not completed";
}
