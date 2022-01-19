const isEven = n => {
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
};

export const even = arr => {
  if (arr.length === 0) return [];
  if (isEven(arr[0])) return [arr[0], ...even(arr.slice(1))];
  return even(arr.slice(1));
};
