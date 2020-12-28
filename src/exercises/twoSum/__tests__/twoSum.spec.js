import twoSum from '../twoSum';

describe('twoSum()', () => {
  // it('should given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', () => {
  //   expect(twoSum([2, 7, 11,15], 9)).toEqual([0, 1]);
  //   expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  //   expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  // });

  it('should given an array of integers nums and an integer target, return the two numbers such that they add up to target.', () => {
    expect(twoSum([4, 1, 2, -2, 11, 15, 1, -1, -6, -4], 9)).toEqual([-2, 11]);
    expect(twoSum([4, 1, 2, 15, 1, -1, -6, -4], 9)).toEqual([15, -6]);
    expect(twoSum([4, 1, 2, 1, -1, -4], 9)).toEqual([]);
  });
});
