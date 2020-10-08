import sum from '../sum';

describe('sum()', () => {
  it('should compute the sum of two integers', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(3, 3)).toBe(6);
    expect(sum(5, 5)).toBe(10);
  });
});
