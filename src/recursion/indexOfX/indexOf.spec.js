import { indexOfX } from './indexOfX';

describe('indexOfX()', () => {
  describe('given a string', () => {
    it('returns the index of the first occurrence of the letter X', () => {
      expect(indexOfX('abcx')).toEqual(3);
      expect(indexOfX('adxf')).toEqual(2);
      expect(indexOfX('xxghi')).toEqual(0);
    });
  });
});
