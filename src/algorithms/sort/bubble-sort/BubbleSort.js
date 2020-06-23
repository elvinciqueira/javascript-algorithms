(function bubbleSort(input) {
  let sorted = true

  while (sorted) {
    sorted = false

    for (let i = 0; i < input.length; i++) {
      if (input[i] > input[i + 1]) {
        let temp = input[i]

        input[i] = input[i + 1]
        input[i + 1] = temp

        sorted = true
      }
    }
  }
})([6, 2, 0, 9, 1, 7, 4, 4, 8, 5, 3])
