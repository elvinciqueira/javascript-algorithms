import { matchingString } from './matchingString';

describe('for each query string, determine how many times it occurs in the list of input strings', () => {
  test('return an array of the results.', () => {
    const testCases = [
      [['ab', 'ab', 'abc'], ['ab', 'abc', 'bc'], [2, 1, 0]],
      [['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'], [2, 1, 0]],
      [['def', 'de', 'fgh'], ['de', 'lmn', 'fgh'], [1, 0, 1]],
    ];
    
    testCases.forEach(([input, queries, expected]) => { 
      expect(matchingString(input, queries)).toEqual(expected);
    });
  });
});