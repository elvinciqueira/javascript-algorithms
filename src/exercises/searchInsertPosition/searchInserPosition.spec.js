import { searchInsert } from './searchInsertPosition';

describe('Given a sorted array of distinct integers and a target value', () => {
  it('return index if target is found', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it('returns it index where it would be if not found', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
});
