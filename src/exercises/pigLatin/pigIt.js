export function pigIt(str) {
  const words = str.split(' ');
  const result = [];
  for (const word of words) {
    const isNotPontuation = word.match(/[a-zA-Z]/);
    if (isNotPontuation) {
      const firstLetter = word[0];
      const rest = word.slice(1);
      result.push(`${rest}${firstLetter}ay`);
    } else {
      result.push(word);
    }
  }
  return result.join(' ');
}
