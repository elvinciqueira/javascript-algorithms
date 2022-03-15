export const search = (nums, target) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (nums[middleIndex] === target) return middleIndex;
    if (nums[middleIndex] < target) startIndex = middleIndex + 1;
    else endIndex = middleIndex - 1;
  }

  return -1;
};
