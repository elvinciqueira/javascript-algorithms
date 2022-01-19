import { reverse } from './reverse';

describe('reverse()', () => {
  describe('given a string', () => {
    it('returns the reversed string', () => {
      expect(reverse('abc')).toEqual('cba');
    });
  });
});
