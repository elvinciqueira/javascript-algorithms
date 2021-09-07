export function sum(aArray) {
  if (!aArray[0]) return 0;
  return aArray[0] + sum(aArray.slice(1));
}
