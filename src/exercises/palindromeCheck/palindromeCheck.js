/**
 * @param {string} string
 * @return {boolean}
 */

// O(n) time, space O(n)
// export default function palindromeCheck(str) {
//   let reversedString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return str === reversedString;
// }

// O(n) time, space O(1)
// export default function palindromeCheck(str) {
//   let leftPointer = str.length - 1;
//   for (let rightPointer = 0; rightPointer < str.length; rightPointer++) {
//     if (leftPointer === rightPointer) {
//       return true;
//     }
//     if (str[leftPointer] !== str[rightPointer]) {
//       return false;
//     }
//     leftPointer -= 1;
//   }
//   return true;
// }

// O(N) time, Space O(1)
// export default function palindromeCheck(str) {
//   return [...str].reverse().join('') === str;
// }
