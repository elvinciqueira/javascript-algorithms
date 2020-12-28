/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export default function twoSum(nums, target) {
  const calc_nums = {}

  for (const n of nums) {
    let diff = target - n

    if (diff in calc_nums) {
      return [diff, n]
    } else {
      calc_nums[n] = true
    }
  }
  return []
}
