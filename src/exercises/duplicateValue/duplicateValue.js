export function duplicateValue(arr) {
  const hashTable = {};

  for (const item of arr) {
    if (hashTable[item]) {
      return item;
    } else {
      hashTable[item] = true;
    }
  }
}
