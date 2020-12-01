import ListFastSum from './optimizedSum'

describe('optmizedSum', () => {
  test('should take in two parameters and return the sum of the list from start_idx and end_idx ', () => {
    expect(ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum(2, 5)).toBe(12)
    expect(ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum(2, 4)).toBe(7)
    expect(ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum(2, 7)).toBe(25)
  });
});
