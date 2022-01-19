export const sum = arr => {
  if (arr.length === 1) return arr[0];
  return arr[0] + sum(arr.slice(1));
};
