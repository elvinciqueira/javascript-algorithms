export const count = list => {
  if (!list[0]) return 0;
  return 1 + count(list.slice(1));
};
