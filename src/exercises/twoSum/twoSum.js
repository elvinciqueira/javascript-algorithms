/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  let result = 0;

  for (let i = 0; i < nums.length - 1 ; i++) {
    result = nums[i] + nums[i + 1];

    if (result === target) {
      return [i, i + 1];
    }
  }
}
