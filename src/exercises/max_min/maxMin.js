export function maxMin(A) {
  let len = A.length;
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < len; i++) {
    if (A[i] > max) {
      max = A[i];
    }
    if (A[i] < min) {
      min = A[i];
    }
  }
  return max + min;
}
