import { maxMin } from './maxMin';

describe('maxMin()', () => {
  describe('Given an array A of size N', () => {
    test('find the sum of Maximum and Minimum element in the given array', () => {
      expect(maxMin([-2, 1, -4, 5, 3])).toBe(1);
      expect(maxMin([1, 3, 4, 1])).toBe(5);
    });
  });
});
