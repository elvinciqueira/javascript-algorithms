export function getIntersection(array1, array2) {
  const hashTable = {};
  const intersection = [];

  for (const item of array1) {
    hashTable[item] = true;
  }

  for (const item of array2) {
    if (hashTable[item]) {
      intersection.push(item);
    }
  }

  return intersection;
}
