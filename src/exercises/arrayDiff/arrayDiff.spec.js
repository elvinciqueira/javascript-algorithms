import { array_diff } from './array_diff';

describe('array_diff()', () => {
  describe('It should remove all values from list a, which are present in list b keeping their order.', () => {
    test('array_diff([1,2],[1]) == [2]', () => {
      expect(array_diff([1, 2], [1])).toEqual([2]);
    });

    test('array_diff([1,2,2,2,3],[2]) == [1,3]', () => {
      expect(array_diff([1, 2, 2, 2, 3], [2])).toEqual([1, 3]);
    });
  });
});
