import { arrayDiff } from './arrayDiff';

describe('arrayDiff()', () => {
  describe('It should remove all values from list a, which are present in list b keeping their order.', () => {
    test('arrayDiff([1,2],[1]) == [2]', () => {
      expect(arrayDiff([1, 2], [1])).toEqual([2]);
    });

    test('arrayDiff([1,2,2,2,3],[2]) == [1,3]', () => {
      expect(arrayDiff([1, 2, 2, 2, 3], [2])).toEqual([1, 3]);
    });
  });
});
