import { findOdd } from './findOdd';

describe('findOdd()', () => {
  describe('Given an array of integers, find the one that appears an odd number of times.', () => {
    test('findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) should return 5', () => {
      expect(
        findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
      ).toBe(5);
    });

    test('findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) should return -1', () => {
      expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1);
    });

    test('findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) should return 5', () => {
      expect(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toBe(5);
    });

    test('findOdd([10]) should return 10', () => {
      expect(findOdd([10])).toBe(10);
    });

    test('findOdd([1,1,1,1,1,1,10,1,1,1,1]) should return 10', () => {
      expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10);
    });

    test('findOdd([5,4,3,2,1,5,4,3,2,10,10]) should return 1', () => {
      expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toBe(1);
    });
  });
});
