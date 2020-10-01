import binarySearchRecursive from '../binarySearchRecursive';

describe('binarySearchRecursive()', () => {
  it('should the index of the found element', () => {
    expect(binarySearchRecursive([1, 2, 3], 2)).toBe(1);
  });

  it('should return -1 if not found', () => {
    expect(binarySearchRecursive([1, 2, 3], 31)).toBe(-1);
  });
});
