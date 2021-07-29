export function maxMin(A) {
  let len = A.length;
  let max = A[0];
  let min = A[0];
  for (let i = 1; i < len; i++) {
    if (A[i] > max) {
      max = A[i];
    }
    if (A[i] < min) {
      min = A[i];
    }
  }
  return max + min;
}
