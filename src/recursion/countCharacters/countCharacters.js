export const countCharacters = str => {
  if (str.length === 1) return str[0].length;
  return countCharacters(str.slice(1)) + str[0].length;
};
