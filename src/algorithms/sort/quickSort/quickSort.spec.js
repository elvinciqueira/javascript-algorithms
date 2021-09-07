import { quickSort } from './quickSort';

describe('quickSort', () => {
  it('should sort an array', () => {
    const array = [5, 2, 4, 6, 1, 3];
    const sortedArray = [1, 2, 3, 4, 5, 6];
    expect(quickSort(array)).toEqual(sortedArray);
  });
});
