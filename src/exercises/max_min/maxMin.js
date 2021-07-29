export function maxMin(A) {
  let len = A.length;
  let max = A[0];
  let min = A[0];
  for (let i = 1; i < len; i++) {
    if (A[i + 1] > max) {
      max = A[i + 1];
    }
    if (A[i + 1] < min) {
      min = A[i + 1];
    }
  }
  return max + min;
}
