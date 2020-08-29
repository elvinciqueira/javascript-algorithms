const dictionary = {
  the: 22038615,
  be: 12545825,
  and: 10741073,
  of: 10343885,
  a: 10144200,
  in: 6996437,
  to: 6332195 /* ... */
};

function getWordFrequency(dictionary, word) {
  //O(1)
  return dictionary[word]
}

console.log(getWordFrequency(dictionary, 'the'))
console.log(getWordFrequency(dictionary, 'of'))
