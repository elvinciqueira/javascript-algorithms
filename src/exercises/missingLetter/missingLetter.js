export function missingLetter(str) {
  const hashtable = {};

  for (let i = 0; i < str.length; i++) {
    hashtable[str[i]] = true;
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < alphabet.length; i++) {
    if (!hashtable[alphabet[i]]) {
      return alphabet[i];
    }
  }
}
