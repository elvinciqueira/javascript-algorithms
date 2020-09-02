function hasDuplicates(n) {
  const duplicates = [] // 1
  let counter = 0 //debug // 1

  for (let outer = 0; outer < n.length; outer++) {
    for (let inner = 0; inner < n.length; inner++) {
      counter++ // 3n^2

      if (outer === inner) continue

      if (n[outer] === n[inner]) {
        return true
      }
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`); // debug
  return false;

  // 3(n^2) + 2 -> O(N^2)
}


hasDuplicates([1, 2, 3, 4]);
// n: 4, counter: 16

hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// n: 9, counter: 81
