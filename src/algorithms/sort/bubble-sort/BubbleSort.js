(function bubbleSort(input) {
  let swapSignal = true

  while (swapSignal) {
    swapSignal = false

    for (let i = 0; i < input.length - 1; i++) {

      if (input[i] > input[i + 1]) {
        let temp = input[i]

        input[i] = input[i + 1]
        input[i + 1] = temp

        swapSignal = true
      }
    }
  }
})([6, 2, 0, 9, 1, 7, 4, 4, 8, 5, 3])

// #############################################################################

function bubbleSort(n) {

  // O(n^2)
  for (let outer = 0; outer < n.length; outer++) {
    let outerElement = n[outer]

    for (let inner = outer + 1; inner < n.length; inner++) {
      let innerElement = n[inner]

      if (outerElement > innerElement) {

        //swap
        n[outer] = innerElement
        n[inner] = outerElement

        //update references
        outerElement = n[outer]
        innerElement = n[inner]
      }
    }
  }
  return n
}
