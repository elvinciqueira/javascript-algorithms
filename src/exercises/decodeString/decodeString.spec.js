import { decodeString } from './decodeString';

describe('decodeString()', () => {
  describe('Given an encoded string, return its decoded string.', () => {
    test('decodeString("3[a]2[bc]") should return "aaabcbc"', () => {
      expect(decodeString('3[a]2[bc]')).toBe('aaabcbc');
    });

    test('decodeString("3[a2[c]]") should return "accaccacc"', () => {
      expect(decodeString('3[a2[c]]')).toBe('accaccacc');
    });

    test('decodeString("2[abc]3[cd]ef") should return "abcabccdcdcdef"', () => {
      expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef');
    });
  });
});
