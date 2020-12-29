/**
 * @param {string} string
 * @return {boolean}
 */

export default function validParentheses(str) {
  const stack = []
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);

  for (let char = 0; char < str.length; char++) {
    if (map.has(str[char])) {
      stack.push(map.get(str[char]))
    } else if (str[char] !== stack.pop()) {
      return false
    }
  }

  return stack.length === 0
}
