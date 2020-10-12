import { sum, minMaxSum } from '../minMaxSum';

describe('minMaxSum()', () => {
  it('should given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. ', () => {
    expect(minMaxSum([1, 3, 2, 4, 5])).toEqual([10, 14]);
    expect(minMaxSum([1, 3, 5, 7, 9])).toEqual([16, 24]);
  });

  it('should sum everything except 1', () => {
    expect(sum([2, 3, 4, 5])).toBe(14);
  });

  it('should sum everything except 2', () => {
    expect(sum([1, 3, 4, 5])).toBe(13);
  });

  it('should sum everything except 3', () => {
    expect(sum([1, 2, 4, 5])).toBe(12);
  });

  it('should sum everything except 4', () => {
    expect(sum([1, 2, 3, 5])).toBe(11);
  });

  it('should sum everything except 5', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
});
