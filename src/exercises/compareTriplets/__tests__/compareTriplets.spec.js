import compareTriplets from '../compareTriplets';

describe('compareTriplets()', () => {
  it('should given a and b, determine their respective comparison points', () => {
    expect(compareTriplets([1, 2, 3], [3, 2, 1])).toEqual([1, 1]);
    expect(compareTriplets([3, 2, 3], [3, 2, 3])).toEqual([0, 0]);
    expect(compareTriplets([1, 2, 3], [3, 2, 4])).toEqual([0, 2]);
  });
});
