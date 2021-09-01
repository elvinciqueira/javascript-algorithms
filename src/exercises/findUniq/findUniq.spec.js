import { findUniq } from './findUniq';

describe('findUniq()', () => {
  describe('when given an array of numbers', () => {
    test('return the unique number', () => {
      expect(findUniq([0, 1, 0])).toBe(1);
      expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
      expect(findUniq([0, 0, 0.55, 0, 0])).toBe(0.55);
      expect(findUniq([3, 10, 3, 3, 3])).toBe(10);
    });
  });
});
