import { hasUniqueChars } from './uniqueChar';

describe('hasUniqueChars()', () => {
  describe('given a word', () => {
    const testCases = [
      [null, false],
      ['"', true],
      ['foo', false],
      ['bar', true],
    ];

    it.each(testCases)(
      'verify if word "%s" has unique char',
      (word, expected) => {
        expect(hasUniqueChars(word)).toBe(expected);
      },
    );
  });
});
