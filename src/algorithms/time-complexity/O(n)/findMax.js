function findMax(array) {
  let max // -> 1
  let counter = 0 // -> 1

  for (let i = 0; i < array.length; i++) { // loop of size n
    counter++ // 1

    if (max === undefined || max < array[i]) {
      max = array[i] // 1
    }
  }

  console.log(`n: ${array.length}, counter: ${counter}`);
  return max

  // 3(n) + 2 -> O(N)
}

findMax([3, 1, 2]);
// n: 3, counter: 3

findMax([4, 5, 6, 1, 9, 2, 8, 3, 7])
// n: 9, counter: 9
