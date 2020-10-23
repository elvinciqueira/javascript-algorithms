import breakingRecords from './breakingRecords';

describe('breakingRecords', () => {
  it('should given the scores for a season, find and print the number of times Maria breaks her records for most and least points scored during the season.', () => {
    expect(breakingRecords([12, 24, 10, 24])).toEqual([1, 1]);
    expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
    expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([4, 0]);
  });
});
