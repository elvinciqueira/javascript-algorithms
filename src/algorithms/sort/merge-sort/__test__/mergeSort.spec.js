import { splitSort, merge } from '../MergeSort';

describe('Merge Sort', () => {
  describe('splitSort()', () => {
    it('should split array in half recursively until two or less elements are left.', () => {
      expect(splitSort([3, 2, 1])).toEqual([1, 2, 3]);
      expect(splitSort([3])).toEqual([3]);
      expect(splitSort([3, 2])).toEqual([2, 3]);
    });
  });

  describe('merge()', () => {
    it('should merge two arrays in ascending order', () => {
      expect(merge([2, 5, 9], [1, 6, 7])).toEqual([1, 2, 5, 6, 7, 9]);
    });
  });
});
