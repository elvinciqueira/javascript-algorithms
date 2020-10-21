export default function birthdayCake(candles) {
  let result = 0;
  const tallestCandle = Math.max(...candles);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallestCandle) {
      result += 1;
    }
  }

  return result;
}
