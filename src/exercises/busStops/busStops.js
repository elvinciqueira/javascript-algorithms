export function busStops(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let first = array[i][0];
    let second = array[i][1];
    total += first - second;
  }
  return total;
}
