export const containsDuplicate = arr => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      return true;
    } else {
      hash[arr[i]] = true;
    }
  }

  return false;
};
