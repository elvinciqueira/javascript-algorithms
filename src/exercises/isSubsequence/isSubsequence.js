/**
 * Linear search - Two pointers
 * Time O(N)
 * https://leetcode.com/problems/is-subsequence/description/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = (s, t) => shouldFindSubsequence(s, t);

const shouldFindSubsequence = (originalString, newString) => {
  let firstPointer = 0;
  for (
    let secondPointer = 0;
    secondPointer < newString.length;
    secondPointer++
  ) {
    const isEqual = originalString[firstPointer] === newString[secondPointer];
    if (isEqual) firstPointer++;
  }
  return firstPointer === originalString.length;
};
