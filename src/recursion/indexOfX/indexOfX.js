export const indexOfX = str => {
  if (str[0] === 'x') return 0;
  return indexOfX(str.slice(1)) + 1;
};
