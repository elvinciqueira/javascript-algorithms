export function quickSort(array) {
  if (array.length < 2) return array;
  const [pivot, ...rest] = array;
  const left = rest.filter(value => value < pivot);
  const right = rest.filter(value => value >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
