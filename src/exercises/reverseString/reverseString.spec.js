import { reverseString } from './reverseString';

describe('reverseString()', () => {
  describe('Return the string A after reversing the string word by word.', () => {
    test('reverseString("The sky is blue") should return "blue is sky the"', () => {
      expect(reverseString('The sky is blue')).toBe('blue is sky The');
    });

    test('reverseString("  hello world!  ") should return "world! hello"', () => {
      expect(reverseString('  hello world!  ')).toBe('world! hello');
    });

    test('reverseString("this is ib") should return "ib is this"', () => {
      expect(reverseString('this is ib')).toBe('ib is this');
    });

    test('reverseString("j") should return "j"', () => {
      expect(reverseString('j')).toBe('j');
    });
  });
});
