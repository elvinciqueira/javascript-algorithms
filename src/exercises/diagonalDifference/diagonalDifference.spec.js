import diagonalDifference from './diagonalDifference';

describe('diagonalDifference', () => {
  it('should given a square matrix, calculate the absolute difference between the sums of its diagonals.', () => {
    expect(
      diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(0);
  });
});
