export const evalRPN = token => {
  const stack = [];
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor(a / b),
  };
  for (const val of token) {
    if (val in operators) {
      const a = Number(stack.pop());
      const b = Number(stack.pop());
      const result = operators[val](b, a);
      stack.push(result);
    } else {
      stack.push(val);
    }
  }
  return stack.pop();
};
