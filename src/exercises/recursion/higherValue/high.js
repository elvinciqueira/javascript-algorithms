export const high = arr => {
  if (arr.length === 1) return arr[0];
  return Math.max(arr[0], high(arr.slice(1)));
};
