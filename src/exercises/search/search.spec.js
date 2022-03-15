import { search } from './search';

describe('search()', () => {
  describe('given an array of integers sorted in ascending order', () => {
    const nums = [-1, 0, 3, 5, 9, 12];

    describe('and an integer target', () => {
      const target = 9;

      it('if targets exists then return its index', () => {
        expect(search(nums, target)).toBe(4);
      });

      it('if target does not exist then return -1', () => {
        expect(search(nums, -2)).toBe(-1);
      });
    });
  });
});
