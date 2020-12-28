import threeSum from './threeSum';

test('should given an array of integers nums and an integer target, return the three numbers such that they add up to target.', () => {
  expect(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]);
  // expect(threeSum([4, 1, 2, 1, -1, -4], 9)).toEqual([]);
});
