export const canConstruct = (ransomNote, magazine) => {
  const ransomNoteChars = ransomNote.split('');
  const magazineChars = magazine.split('');
  const magazineCharsMap = {};

  magazineChars.forEach(char => {
    if (magazineCharsMap[char]) {
      magazineCharsMap[char]++;
    } else {
      magazineCharsMap[char] = 1;
    }
  });

  return ransomNoteChars.every(char => {
    if (magazineCharsMap[char]) {
      magazineCharsMap[char]--;
      return true;
    }

    return false;
  });
};
