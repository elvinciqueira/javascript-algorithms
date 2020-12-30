/**
 * @param {string} string
 * @return {boolean}
 */

export default function palindromeCheck(str) {
  let reverseIndex = str.length - 1;

  for (let index = 0; index < str.length - 1; index++) {
    if (index === reverseIndex) {
      return true;
    }

    if (str[index] !== str[reverseIndex]) {
      return false;
    }

    reverseIndex--;
  }

  return true;
}
