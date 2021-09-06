import { pigIt } from './pigIt';

describe('pigIt()', () => {
  describe('Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.', () => {
    it('should return "igPay atinlay siay oolcay" for "Pig latin is cool"', () => {
      expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    });

    it('should return "hisTay siay ymay tringsay" for "This is my string"', () => {
      expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay');
    });

    it('shoult return "elloHay orldway !" for "Hello world !"', () => {
      expect(pigIt('Hello world !')).toBe('elloHay orldway !');
    });
  });
});
