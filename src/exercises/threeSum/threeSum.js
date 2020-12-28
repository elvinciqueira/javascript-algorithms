/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export default function threeSum(nums, target) {
  const result = []
  const sortedNumbers = nums.sort((a , b) => a - b)

  for (let current = 0; current < nums.length; current++) {
    let leftPointer = current + 1
    let rightPointer = nums.length - 1

    while (leftPointer < rightPointer) {
      const pointersSum = sortedNumbers[current] + sortedNumbers[leftPointer] + sortedNumbers[rightPointer]

      if (pointersSum < target) {
        leftPointer++
      } else if (pointersSum > target) {
        rightPointer--
      } else {
        result.push([sortedNumbers[current],
          sortedNumbers[leftPointer], sortedNumbers[rightPointer]])

        leftPointer += 1
        rightPointer -= 1
      }
    }
  }

  return result
}
