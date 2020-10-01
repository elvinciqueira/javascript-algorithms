import binarySearchRecursive from '../binarySearchRecursive';

describe('binarySearchRecursive()', () => {
  it('should the index of the found element', () => {
    expect(binarySearchRecursive([1, 2, 3], 2)).toBe(1);
    expect(binarySearchRecursive([1, 2, 3], 3)).toBe(2);
    expect(binarySearchRecursive([1, 2, 3], 1)).toBe(0);
  });

  it('should return -1 if not found', () => {
    expect(binarySearchRecursive([1, 2, 3], 31)).toBe(-1);
  });
});
