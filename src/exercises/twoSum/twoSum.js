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

/**
 * Hash Map - 2 Pass
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  const map = getMap(nums);
  return getSum(nums, target, map);
}

const getMap = (nums, map = new Map()) => {
  for (let index = 0; index <= nums.length; index++) {
    map.set(nums[index], index);
  }
  return map;
};

const getSum = (nums, target, map) => {
  for (let index = 0; index <= nums.length; index++) {
    const difference = target - nums[index];
    const isTargetSum = map.has(difference) && map.get(difference) !== index;
    if (isTargetSum) return [nums[index], difference];
  }
  return [];
};

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
