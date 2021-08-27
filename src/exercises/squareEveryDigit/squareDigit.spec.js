import { squareDigits } from './squareDigit';

test('squareDigits(3212) should equal 9414', () => {
  expect(squareDigits(3212)).toBe(9414);
});

test('squareDigits(9119) should equal 811181', () => {
  expect(squareDigits(9119)).toBe(811181);
});

test('squareDigits(2112) should equal 4114', () => {
  expect(squareDigits(2112)).toBe(4114);
});
