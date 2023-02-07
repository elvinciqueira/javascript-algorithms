import { isPermutation } from './isPermutation';

describe('isPermutation()', () => {
  const testCases = [
    ['Nib', 'bin', false],
    ['cat', 'act', true],
    ['ca t', 'ac t', true],
    ['', 'act', false],
    ['cat', null, false],
  ];

  test.each(testCases)(
    'if a string is a permutation of another string.',
    (str1, str2, expected) => {
      expect(isPermutation(str1, str2)).toBe(expected);
    },
  );
});
