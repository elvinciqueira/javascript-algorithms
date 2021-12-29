import { nonDuplicate } from './nonDuplicate';

describe('nonDuplicate()', () => {
  describe('given an string', () => {
    it('returns first non-duplicate character', () => {
      expect(nonDuplicate('minimum')).toBe('n');
    });
  });
});
