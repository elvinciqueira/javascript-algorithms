import { squareSortedArray } from './squareSortedArray';

describe('squareSortedArray()', () => {
  describe('given an integer array nums sorted in non-decreasing order', () => {
    const testCases = [
      [
        [-4, -1, 0, 3, 10],
        [0, 1, 9, 16, 100],
      ],
      [
        [-7, -3, 2, 3, 11],
        [4, 9, 9, 49, 121],
      ],
    ];

    it.each(testCases)(
      'returns a new array of the squares of each element in nums',
      (nums, expected) => {
        expect(squareSortedArray(nums)).toEqual(expected);
      },
    );
  });
});
