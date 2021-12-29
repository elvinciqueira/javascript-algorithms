import { getIntersection } from './getIntersection';

describe('getIntersection()', () => {
  describe('when given two arrays', () => {
    it('returns a third array containing all values within two arrays', () => {
      expect(getIntersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8])).toEqual([2, 4]);
    });
  });
});
