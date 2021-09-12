const _split = str => {
  const array = [];
  let index = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === ' ') {
      if (index !== j) {
        const word = str.slice(index, j);
        array.push(word);
      }
      index = j + 1;
    }
  }
  if (index <= str.length - 1) array.push(str.slice(index));
  return array;
};

const _reverse = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

export const reverseString = A => {
  const stringToArray = _split(A);
  const reversed = _reverse(stringToArray);
  return reversed.join(' ');
};
