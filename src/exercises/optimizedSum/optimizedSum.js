// Brute Force O(n)
// export default function ListFastSum(arr) {
//   function sum(start_idx, end_idx) {
//     let total = 0
//     for (let i = start_idx; i < end_idx; i++) {
//       total += arr[i]
//     }

//     return total
//   }

//   return {
//     sum
//   }
// }


// Optmized Sum time-complexity O(1), space complexity O(n)
export default function ListFastSum(nums) {
  let currentSum = 0
  const sumUpTo = []

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]
    sumUpTo.push(currentSum)
  }

  sumUpTo.push(0)

  function sum(start_idx, end_idx) {
    return sumUpTo[end_idx - 1] - sumUpTo[start_idx - 1]
  }

  return {
    sum
  }
}
