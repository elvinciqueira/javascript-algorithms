import selectionSort from './selectionSort';

test('should sort an array', () => {
  expect(selectionSort([4, 2, 7, 1, 3])).toEqual([1, 2, 3, 4, 7]);
});
