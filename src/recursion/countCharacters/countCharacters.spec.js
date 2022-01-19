import { countCharacters } from './countCharacters';

describe('countCharacters()', () => {
  describe('given an array of strings', () => {
    it('return the total number of characters across all strings', () => {
      expect(countCharacters(['abc', 'def'])).toEqual(6);
      expect(countCharacters(['abc', 'def', 'ghi'])).toEqual(9);
    });
  });
});
