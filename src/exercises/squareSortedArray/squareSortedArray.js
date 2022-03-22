export const squareSortedArray = array => {
  const pow = n => Math.pow(n, 2);
  const ascending = (a, b) => a - b;

  return array.map(pow).sort(ascending);
};
