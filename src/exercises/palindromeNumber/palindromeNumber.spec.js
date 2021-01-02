import palindromeNumber from './palindromeNumber';

test('Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.', () => {
  expect(palindromeNumber(-121)).toBe(false);
  expect(palindromeNumber(121)).toBe(true);
  expect(palindromeNumber(10)).toBe(false);
  expect(palindromeNumber(-101)).toBe(false);
  expect(palindromeNumber(1221)).toBe(true);
});
