import { gcd } from './gcd';

describe('gcd()', () => {
  describe('Given 2 non negative integers m and n, find gcd(m, n)', () => {
    test('2 integers m and n is defined as the greatest integer g such that g is a divisor of both m and n', () => {
      expect(gcd(2, 4)).toBe(2);
      expect(gcd(8, 4)).toBe(4);
      expect(gcd(6, 9)).toBe(3);
    });
  });
});
