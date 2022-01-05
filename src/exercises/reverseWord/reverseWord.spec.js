import { reverseWord } from './reverseWord';

describe('reverseWord()', () => {
  describe('Return the string A after reversing the string word by word.', () => {
    test('reverseWord("The sky is blue") should return "blue is sky the"', () => {
      expect(reverseWord('The sky is blue')).toBe('blue is sky The');
    });

    test('reverseWord("  hello world!  ") should return "world! hello"', () => {
      expect(reverseWord('  hello world!  ')).toBe('world! hello');
    });

    test('reverseWord("this is ib") should return "ib is this"', () => {
      expect(reverseWord('this is ib')).toBe('ib is this');
    });

    test('reverseWord("j") should return "j"', () => {
      expect(reverseWord('j')).toBe('j');
    });
  });
});
