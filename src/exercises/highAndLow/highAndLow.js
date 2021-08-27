export function highAndLow(numbers) {
  const toArrayNumbers = numbers.split(' ').map(Number);
  let high = toArrayNumbers[0];
  let low = toArrayNumbers[0];
  for (const number of toArrayNumbers) {
    if (number > high) {
      high = number;
    }
    if (number < low) {
      low = number;
    }
  }
  return `${high} ${low}`;
}
