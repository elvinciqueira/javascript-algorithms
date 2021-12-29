import { missingLetter } from './missingLetter';

describe('missingLetter()', () => {
  describe('when given an string', () => {
    it('returns first missing letter of the alphabet', () => {
      expect(missingLetter('the quick brown box jumps over a lazy dog')).toBe(
        'f',
      );
    });
  });
});
