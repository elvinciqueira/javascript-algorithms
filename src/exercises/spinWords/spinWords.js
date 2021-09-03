export function spinWords(string) {
  const stringToArray = string.split(' ');
  return stringToArray
    .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
    .join(' ');
}
