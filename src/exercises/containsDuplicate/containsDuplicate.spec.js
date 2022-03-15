import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicate()', () => {
  describe('given an integer array', () => {
    const testCases = [
      [true, [1, 2, 3, 1]],
      [false, [1, 2, 3, 4]],
      [true, [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
    ];

    it.each(testCases)(`returns %s when array is %s`, (expected, array) => {
      expect(containsDuplicate(array)).toBe(expected);
    });
  });
});
