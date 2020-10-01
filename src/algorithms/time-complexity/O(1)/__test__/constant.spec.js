import isEmpty from '../isEmpty';
import getWordFrequency from '../look-up-table';
import isEvenOrOdd from '../oddOrEven';
import searchByIndex from '../searchByIndex';

describe('O(1)', () => {
  describe('isEmpty()', () => {
    it('should return true if an array is empty and false otherwise', () => {
      expect(isEmpty()).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([6, 7, 8])).toBe(false);
      expect(isEmpty('text')).toBe(false);
    });
  });

  describe('getWordFrequency()', () => {
    it('should return the value of the object', () => {
      const dictionary = {
        the: 22038615,
        be: 12545825,
        and: 10741073,
        of: 10343885,
        a: 10144200,
        in: 6996437,
        to: 6332195 /* ... */,
      };

      expect(getWordFrequency(dictionary, 'the')).toBe(22038615);
      expect(getWordFrequency(dictionary, 'of')).toBe(10343885);
    });
  });

  describe('oddOrEven()', () => {
    it('should return odd or even', () => {
      expect(isEvenOrOdd(10)).toBe('Even');
      expect(isEvenOrOdd(4)).toBe('Even');
      expect(isEvenOrOdd(3)).toBe('Odd');
      expect(isEvenOrOdd(1001)).toBe('Odd');
    });
  });

  describe('searchByIndex()', () => {
    it("should search for array's element by index", () => {
      const array = [2, 5, 1, 9, 6, 7, -1];

      expect(searchByIndex(array, 3)).toBe(9);
      expect(searchByIndex(array, 6)).toBe(-1);
      expect(searchByIndex(array, 13)).toBe(undefined);
    });
  });
});
