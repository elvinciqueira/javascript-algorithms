// Algorithm - 1
// Space - O(N), Time O(N)

export function hasUniqueChars(aWord, charsSet = new Set()) {
  if (!isValidWord(aWord)) return false;
  for (const char of aWord) {
    if (charsSet.has(char)) return false;
    charsSet.add(char);
  }
  return true;
}

const isValidWord = aWord => Boolean(aWord);

//Algorithm 2 - In-Place
// Space O(1), Time O(n^2)

// export function hasUniqueChars(aWord) {
//   if (!isValidWord(aWord)) return false;
//   for (let i = 0; i < aWord.length; i++) {
//     for (let j = i + 1; j < aWord.length; j++) {
//       if (aWord[i] === aWord[j]) return false;
//     }
//   }
//   return true;
// }
