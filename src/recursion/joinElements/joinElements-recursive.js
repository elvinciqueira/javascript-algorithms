export function joinElements(array, joinString) {
  function recursive(index, resultSoFar) {
    resultSoFar += array[index];
    if (index === array.length - 1) return resultSoFar;
    else return recursive(index + 1, resultSoFar + joinString);
  }
  return recursive(0, '');
}
