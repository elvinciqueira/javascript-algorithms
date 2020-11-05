// solution 1
// export default function sockMerchant(n, arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   let totalPairs = 0;

//   for (let i = 0; i < n - 1; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       totalPairs++;

//       i += 1;
//     }
//   }

//   return totalPairs;
// }


//Solution 2 - time complexity & space complexity O(n)
const sockMerchant = (n, arr) => {
  let socks = {};

  for (let i = 0; i < arr.length; i++) {
    socks[arr[i]] ? socks[arr[i]]++ : socks[arr[i]] = 1;
  }

  let pairs = 0;

  for (let sockPair in socks) {
    pairs += Math.floor(socks[sockPair] / 2);
  }

  return pairs;
}

export default sockMerchant;
