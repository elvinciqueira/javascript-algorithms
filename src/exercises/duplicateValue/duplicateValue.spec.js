import { duplicateValue } from './duplicateValue';

describe('duplicateValue()', () => {
  describe('when given an array', () => {
    it('returns first duplicate value it finds', () => {
      expect(duplicateValue(['a', 'b', 'c', 'd', 'c', 'e', 'f'])).toBe('c');
    });
  });
});
