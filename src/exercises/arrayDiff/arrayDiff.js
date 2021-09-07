export function arrayDiff(a, b) {
  return a.filter(value => !b.includes(value));
}
