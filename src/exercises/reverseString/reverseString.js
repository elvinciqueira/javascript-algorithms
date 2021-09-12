const _split = str => {
  const array = [];
  let index = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === ' ') {
      if (index !== j) {
        array.push(str.slice(index, j));
      }
      index = j + 1;
    }
  }
  array.push(str.slice(index, str.length));
  return array;
};

export const reverseString = A => {
  const stringToArray = _split(A);
  let left = 0;
  let right = stringToArray.length - 1;
  while (left < right) {
    [stringToArray[left], stringToArray[right]] = [
      stringToArray[right],
      stringToArray[left],
    ];
    left++;
    right--;
  }
  return stringToArray.join(' ').trim();
};
