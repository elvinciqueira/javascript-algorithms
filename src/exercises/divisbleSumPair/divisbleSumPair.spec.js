import divisibleSumPair from './divisibleSumPair';

describe('divisibleSumPair()', () => {
  it('should return the integer count of pairs meeting the criteria.', () => {
    expect(divisibleSumPair(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
  });
});
