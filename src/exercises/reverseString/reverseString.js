import Stack from '../../data-structure/stack/stack-array';

export function reverseString(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}
