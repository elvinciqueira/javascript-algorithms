import { isAnagram } from './isAnagram';

describe('isAnagram()', () => {
  const testCases = [
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
    ['ab', 'a', false],
    ['aacc', 'ccac', false],
  ];

  it.each(testCases)(
    'given two strings %s and %s, return true if t is an anagram of s, and false otherwise.',
    (s, t, expected) => {
      expect(isAnagram(s, t)).toBe(expected);
    },
  );
});
