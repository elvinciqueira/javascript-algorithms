/**
 * Find the maximun sum of contiguous elements in an array.
 *
 * @examples
 * maxSubArray([1, -3, 10, -5]); // => 10
 * maxSubArray([-3,4,-1,2,1,-5]); // => 6
 *
 * @param {number[]} array - Array
 */

// Run Time O(n^3)
function maxSubArray(array) {
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) { // O (n^3)
    for (let j = i + 1; j <= array.length; j++) { // O (n^2)
      const sum = array.slice(i, j).reduce((a, n) => a + n, 0); //O(n)

      max = Math.max(max, sum); //O(1)
    }
  }

  return max;
}


// Run Time O(n)
function maxSubArray(array) {
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) { //O(n) * O(n)
    let local = 0;

    for (let j = i; j < array.length; j++) { // O(n)
      local += array[j];

      max = Math.max(max, local);
    }
  }

  return max;
}


// Run time O(1)
function maxSubArray(array) {
  let max = -Infinity;
  let local = 0;

  array.forEach(n => {
    local = Math.max(n, local + n);
    max = Math.max(max, local);
  });

  return max;
}
