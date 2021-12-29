export function intersection(arr1, arr2) {
  const hashTable = {};
  const result = [];

  for (const item of arr1) {
    hashTable[item] = true;
  }

  for (const item of arr2) {
    if (hashTable[item]) {
      result.push(item);
    }
  }

  return result;
}
