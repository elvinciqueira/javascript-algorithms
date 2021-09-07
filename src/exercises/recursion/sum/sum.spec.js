import { sum } from './sum';

test('sum([2, 4, 6]) === 12', () => {
  expect(sum([2, 4, 6])).toBe(12);
});

test('sum([4, 6]) === 10', () => {
  expect(sum([4, 6])).toBe(10);
});
