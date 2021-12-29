import { intersection } from './intersection';

describe('intersection()', () => {
  describe('when given two arrays', () => {
    it('returns a third array containing all values within two arrays', () => {
      expect(intersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8])).toEqual([2, 4]);
    });
  });
});
