export function findOdd(array) {
  const map = new Map();
  const isOdd = num => num % 2;
  for (const number of array) {
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }
  for (const [key, value] of map) {
    if (isOdd(value)) {
      return key;
    }
  }
}
