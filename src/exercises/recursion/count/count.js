export const count = list => {
  if (!list.length) return 0;
  return 1 + count(list.slice(1));
};
