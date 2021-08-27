export function squareDigits(num) {
  let result = '';
  const digits = num.toString();
  for (let i = 0; i < digits.length; i++) {
    result += digits[i] ** 2;
  }
  return Number(result);
}
