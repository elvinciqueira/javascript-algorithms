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
