import { uniqSort } from './uniqSort';

describe('uniqSort()', () => {
  describe('when given an array of numbers', () => {
    it('should not return any duplicate values in the sorted array', () => {
      expect(uniqSort([1, 5, 2, 1])).toEqual([1, 2, 5]);
      expect(uniqSort([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
    });
  });
});
