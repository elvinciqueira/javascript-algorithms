/**
 * Recursive Binary Search
 * Runtime: O(log n)
 *
 * @example
 * binarySearch([1, 2, 3], 2); //↪️ 1
 * binarySearch([1, 2, 3], 31); //↪️ -1
 * @param {array} array collection of sorted elements
 * @param {string|number} search value to search for
 * @param {number} offset keep track of array's original index
 * @return index of the found element or -1 if not found
 */

export default function binarySearchRecursive(array, search, offset = 0) {
  //split array in half
  const half = parseInt(array.length / 2, 10);
  const current = array[half];

  if (current === search) {
    return offset + half;
  }

  if (array.length === 1) {
    return -1;
  }

  if (search > current) {
    const right = array.slice(half);

    return binarySearchRecursive(right, search, offset + half);
  }

  const left = array.slice(0, half);

  return binarySearchRecursive(left, search, offset);
}
