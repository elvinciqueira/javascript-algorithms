import { highAndLow } from './highAndLow';

test('highAndLow("1 2 3 4 5") should return "5 1"', () => {
  expect(highAndLow('1 2 3 4 5')).toBe('5 1');
});

test('highAndLow("1 2 -3 4 5") should return "5 -3"', () => {
  expect(highAndLow('1 2 -3 4 5')).toBe('5 -3');
});

test('highAndLow("1 9 3 4 -5") should return "9 -5"', () => {
  expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
});

test('highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") should return "542 -214"', () => {
  expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toBe('542 -214');
});
