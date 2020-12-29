import validParentheses from './validParentheses';

test(`Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`, () => {
  expect(validParentheses('()')).toBe(true)
  expect(validParentheses('[[')).toBe(false)
  expect(validParentheses('([)]')).toBe(false)
  expect(validParentheses('{[]}')).toBe(true)
  expect(validParentheses("()[]{}")).toBe(true)
})
