export function maxMin(A) {
  const min = Math.min(...A);
  const max = Math.max(...A);

  return max + min;
}
