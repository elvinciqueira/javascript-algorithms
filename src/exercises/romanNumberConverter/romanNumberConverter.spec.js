import { romanNumber } from './';

let roman;
describe('romanNumber()', () => {
  beforeEach(() => {
    roman = romanNumber();
  });

  describe('when roman algarism is I', () => {
    test('returns number 1', () => {
      const number = roman.convert('I');

      expect(number).toBe(1);
    });
  });

  describe('when roman algarism is II', () => {
    test('returns number 2', () => {
      const number = roman.convert('II');

      expect(number).toBe(2);
    });
  });

  describe('when roman algarism is V', () => {
    test('returns number 5', () => {
      const number = roman.convert('V');

      expect(number).toBe(5);
    });
  });

  describe('when roman algarism is IV', () => {
    test('returns number 4', () => {
      const number = roman.convert('IV');

      expect(number).toBe(4);
    });
  });

  describe('when roman algarism is XXII', () => {
    test('returns number 22', () => {
      const number = roman.convert('XXII');

      expect(number).toBe(22);
    });
  });
});
