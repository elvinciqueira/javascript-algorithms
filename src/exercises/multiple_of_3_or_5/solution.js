export function solution(number) {
  const multiples = n => n % 3 === 0 || n % 5 === 0;
  const sum = (acc, number) => acc + number;
  return [...Array(number).keys()].filter(multiples).reduce(sum, 0);
}
