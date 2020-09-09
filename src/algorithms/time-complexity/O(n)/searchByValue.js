/**
 * Search for array's element by value
 *
 * @example Given array = [2, 5, 1, 9, 6, 7];
 * searchByValue(array, 9); //↪️ 3
 * searchByValue(array, 13); //↪️ -1
 * @param {array} array
 * @param {any} value
 */

function searchByValue(array, value) {

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element === value) return index;
  }

  return -1;
}
