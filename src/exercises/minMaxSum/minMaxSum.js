export const sum = values => (values || []).reduce((target, value) => target + value, 0);

export const minMaxSum = arr => {
  arr.sort();

  let maxSum = sum(arr.slice(1));
  let minSum = sum(arr.slice(0, -1));

  return [minSum, maxSum];
}


