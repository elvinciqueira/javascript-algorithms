export default function recurringCharacter(str) {
  let set = new Set()

  for(let character = 0; character < str.length; character++) {
    if (set.has(str[character])) {
      return str[character]
    }

    set.add(str[character])
  }
}
