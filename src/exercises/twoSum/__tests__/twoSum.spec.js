import twoSum from '../twoSum';

describe('twoSum()', () => {
  it('should given an array of integers nums and an integer target, return the two numbers such that they add up to target.', () => {
    expect(twoSum([4, 1, 2, -2, 11, 16, 1, -1, -6, -4], 9)).toEqual([-2, 11]);
    expect(twoSum([4, 1, 2, 1, -1, -4], 9)).toEqual([]);
  });
});
