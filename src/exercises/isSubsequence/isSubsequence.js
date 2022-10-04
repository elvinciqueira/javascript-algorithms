/**
 * Linear search - Two pointers
 * Time O(N)
 * https://leetcode.com/problems/is-subsequence/description/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = (s, t) => shouldFoundSubsequence(s, t);

const shouldFoundSubsequence = (s, t) => {
  let sPointer = 0;
  for (let tPointer = 0; tPointer < t.length; tPointer++) {
    const isEqual = s[sPointer] === t[tPointer];
    if (isEqual) sPointer++;
  }
  return sPointer === s.length;
};
