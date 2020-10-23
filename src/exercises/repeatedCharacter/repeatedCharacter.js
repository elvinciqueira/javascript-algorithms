export default function repeatedCharacter(str) {
  let firstLetter = "";
  let mapLetter = new Map();

  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i).toLowerCase();

    if (mapLetter.has(letter)) {
      mapLetter.set(letter, mapLetter.get(letter) + 1);
    } else {
      mapLetter.set(letter, 1);
    }
  }

  for (let [key, value] of mapLetter) {
    if (value == 1) {
      firstLetter = key;

      break;
    }
  }

  return firstLetter;
}
