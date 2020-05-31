/**
 * @param n
 * @return {number[]}
 */

export default function fibonacci(n) {
  const fibSequence = [1];

  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  let iteratorCounter = n - 1;

  while (iteratorCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);

    iteratorCounter -= 1;
  }

  return fibSequence;
}
