// solution 1
export default function sockMerchant(n, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let totalPairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      totalPairs++;

      i += 1;
    }
  }

  return totalPairs;
}
