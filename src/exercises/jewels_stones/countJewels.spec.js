import { countJewels } from './countJewels';

describe('given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.', () => {
  const testCases = [
    ['aA', 'aAAbbbb', 3],
    ['z', 'ZZ', 0],
  ];

  it.each(testCases)(
    'when jewels is %s and stones is %s, then return %i',
    (jewels, stones, expected) => {
      expect(countJewels(jewels, stones)).toBe(expected);
    },
  );
});
