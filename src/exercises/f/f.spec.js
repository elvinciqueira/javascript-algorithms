import { f, square } from './f';

describe('f()', () => {
  it('should return the sum of the squares of the two larger numbers', () => {
    expect(f(1, 2, 3)).toBe(13);
    expect(f(2, 4, 5)).toBe(41);
    expect(f(1, 9, 9)).toBe(162);
  });

  describe('square()', () => {
    it('should return the square of the number', () => {
      expect(square(4)).toBe(16);
      expect(square(5)).toBe(25);
      expect(square(9)).toBe(81);
    });
  });
});
