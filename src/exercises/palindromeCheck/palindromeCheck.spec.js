import palindromeCheck from './palindromeCheck';

test('should validate if a string is a palindrome', () => {
  expect(palindromeCheck('mom')).toBe(true);
  expect(palindromeCheck('abccba')).toBe(true);
  expect(palindromeCheck('algomania')).toBe(false);
  expect(palindromeCheck('elvin')).toBe(false);
});
