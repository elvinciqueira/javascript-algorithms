import { reverseString } from './reverseString';

describe('reverseString()', () => {
  test('reverseString("abcde") should return "edcba"', () => {
    expect(reverseString('abcde')).toBe('edcba');
  });
});
