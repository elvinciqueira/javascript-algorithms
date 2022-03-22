import { canConstruct } from './canConstruct';

describe('canConstruct()', () => {
  describe('given two strings ransomNote and magazine', () => {
    const testCases = [
      ['a', 'b', false],
      ['aa', 'ab', false],
      ['aa', 'aab', true],
      ['aa', 'aabb', true],
    ];

    it.each(testCases)(
      'returns %p when ransomNote is %s and magazine is %s',
      (ransomNote, magazine, expected) => {
        expect(canConstruct(ransomNote, magazine)).toBe(expected);
      },
    );
  });
});
