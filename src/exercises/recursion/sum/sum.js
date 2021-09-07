export function sum(aArray) {
  if (!aArray.length) return 0;
  return aArray[0] + sum(aArray.slice(1));
}
