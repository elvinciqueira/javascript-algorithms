import simpleArraySum from '../simpleArraySum';

describe('simpleArraySum()', () => {
  it('should find the sum of its elements', () => {
    expect(simpleArraySum([1, 2, 3])).toBe(6);
    expect(simpleArraySum([1, 5, 3])).toBe(9);
    expect(simpleArraySum([5, 5, 5])).toBe(15);
  });
});
