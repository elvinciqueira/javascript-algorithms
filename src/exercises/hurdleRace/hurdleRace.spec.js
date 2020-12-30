import hurdleRace from './hurdleRace';

test('How many doses of the potion must the character take to be able to jump all of the hurdles.', () => {
  expect(hurdleRace(1, [1, 2, 3, 3, 2])).toBe(2);
  expect(hurdleRace(4, [1, 6, 3, 5, 2])).toBe(2);
  expect(hurdleRace(7, [2, 5, 4, 5, 2])).toBe(0);
});
