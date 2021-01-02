/**
 * @param {number} integer
 * @return {boolean}
 */

export default function palindromeNumber(integer) {
  if (integer < 0 || (integer % 10 == 0 && integer != 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (integer > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (integer % 10);

    revertedNumber /= 10;
  }

  return integer == revertedNumber || integer == revertedNumber / 10;
}
