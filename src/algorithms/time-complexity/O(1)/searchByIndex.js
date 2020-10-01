/**
 * Search for array's element by index
 *
 * @example Given array = [2, 5, 1, 9, 6, 7, -1];
 * searchByIndex(array, 3); //↪️ 9
 * searchByIndex(array, 6); //↪️ -1
 * searchByIndex(array, 13); //↪️ undefined
 * @param {array} array
 * @param {number} index
 * @returns {any} value or undefined if not found
 */

export default function searchByIndex(array, index) {
  return array[index];
}
