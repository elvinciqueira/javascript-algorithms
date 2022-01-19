import { sum } from './sum';

describe('sum()', () => {
  describe('given an array of numbers', () => {
    it('returns a sum of those numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
      expect(sum([1, 2, 3])).toBe(6);
    });
  });
});
