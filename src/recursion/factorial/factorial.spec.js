import factorial from './factorial';

describe('factorial()', () => {
  const testCases = [
    [{ fac: 5, expected: 120 }],
    [{ fac: 3, expected: 6 }],
    [{ fac: 4, expected: 24 }],
  ];

  it.each(testCases)(
    'calculates factorial of a number',
    ({ fac, expected }) => {
      expect(factorial(fac)).toBe(expected);
    },
  );
});
