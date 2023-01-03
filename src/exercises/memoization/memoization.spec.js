import { memoize } from './memoziation';

jest.spyOn(console, 'log');

describe('memoize()', () => {
  describe('when it takes an argument', () => {
    it('returns value from cache', () => {
      const times10 = n => n * 10;
      expect(memoize(times10)(9)).toBe(90);
      expect(console.log).toHaveBeenCalledWith('calculated');
      expect(memoize(times10)(9)).toBe(90);
      expect(console.log).toHaveBeenLastCalledWith('cache');
    });
  });
});
