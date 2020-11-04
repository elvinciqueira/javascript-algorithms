import insertionSort from './insertionSort';

describe('insertionSort()', () => {
  it('should sort an array of integers', () => {
    expect(insertionSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
