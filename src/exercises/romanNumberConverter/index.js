export const romanNumber = () => {
  const hashTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return {
    convert(aRomanNumber) {
      let count = 0;
      let lastDigit = 0;

      for (let i = aRomanNumber.length - 1; i >= 0; i--) {
        let current = hashTable[aRomanNumber[i]];
        let multiplier = current < lastDigit ? -1 : 1;

        count += current * multiplier;

        lastDigit = current;
      }

      return count;
    },
  };
};

const roman = romanNumber();
const number = roman.convert('IV');

console.log(number);
