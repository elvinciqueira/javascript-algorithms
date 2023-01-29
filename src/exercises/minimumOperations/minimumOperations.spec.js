import { minimumOperation } from './minimumOperations';

describe('minimumOperation()', () => {
  describe('given an non-negative array of numbers', () => {
    test('return the minimum number of operations to make every element in nums equal to 0', () => {
      const testCases = [
        { input: [1, 5, 0, 3, 5], output: 3 },
        { input: [0], output: 0 },
      ];

      testCases.forEach(({ input, output }) => {
        expect(minimumOperation(input)).toBe(output);
      });
    });
  });
});
