export function nonDuplicate(str) {
  const hastable = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str.charAt(i);
    if (hastable[letter]) {
      hastable[letter] = hastable[letter] + 1;
    } else {
      hastable[letter] = 1;
    }
  }

  for (const char in hastable) {
    if (hastable[char] === 1) {
      return char;
    }
  }
}
