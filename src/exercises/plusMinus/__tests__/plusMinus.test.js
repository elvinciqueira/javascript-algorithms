import plusMinus from '../plusMinus';

describe('plusMins()', () => {
  it('should given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. ', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toEqual([0.5, 0.333333, 0.166667]);
  });
});
