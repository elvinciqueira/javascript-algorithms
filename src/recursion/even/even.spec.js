import { even } from './even';

describe('even()', () => {
  describe('given an array of numbers', () => {
    it('returns an array of even numbers', () => {
      expect(even([1, 2, 3, 4, 5])).toEqual([2, 4]);
      expect(even([1, 2, 3])).toEqual([2]);
      expect(even([2, 4, 6])).toEqual([2, 4, 6]);
    });
  });
});
