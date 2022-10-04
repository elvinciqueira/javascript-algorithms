import { isSubsequence } from './isSubsequence';

describe('isSubsequence()', () => {
  const testCases = [
    ['abc', 'ahbgdc', true],
    ['axc', 'ahbgdc', false],
  ];

  test.each(testCases)(
    'Given two strings %s and %s, return true if s is a subsequence of t, or false otherwise.',
    (s, t, expected) => {
      expect(isSubsequence(s, t)).toBe(expected);
    },
  );
});
