/**
 * Linear search implementation.
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @return {number[]}
 */

export default function linearSearch(array, seekElement) {
  const foundIndices = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === seekElement) {
      foundIndices.push(i);
    }
  }

  return foundIndices;
}
