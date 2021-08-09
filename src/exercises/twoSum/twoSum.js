/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Solution 1 - O(n^2)
// export default function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const first = nums[i];
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       const second = nums[j];
//       if (first + second === target) {
//         return [first, second];
//       }
//     }
//   }
//   return [];
// }

// Solution 2 - O(n), Space O(n)
export default function twoSum(nums, target) {
  const calc_numbers = {};
  for (let num of nums) {
    const result = target - num;
    if (result in calc_numbers) {
      return [result, num];
    } else {
      calc_numbers[num] = true;
    }
  }
  return [];
}

//Solution 3 - O(n log(n))
// export default function twoSum(nums, target) {
//   nums.sort((a, b) => a - b);
//   let leftPointer = 0;
//   let rightPointer = nums.length - 1;
//   while (leftPointer < rightPointer) {
//     const result = nums[leftPointer] + nums[rightPointer];
//     if (result == target) {
//       return [nums[leftPointer], nums[rightPointer]];
//     } else if (result < target) {
//       leftPointer += 1;
//     } else if (result > target) {
//       rightPointer -= 1;
//     }
//   }
//   return [];
// }

twoSum([4, 1, 2, -2, 11, 16, 1, -1, -6, -4], 9); //?
