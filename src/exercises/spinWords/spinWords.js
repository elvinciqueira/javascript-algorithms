export function spinWords(string) {
  const stringToArray = string.split(' ');
  const hasFiveOrMoreLetters = word => word.length >= 5;
  const spinWord = word => word.split('').reverse().join('');
  return stringToArray
    .map(word => (hasFiveOrMoreLetters(word) ? spinWord(word) : word))
    .join(' ');
}
