import isEmpty from '../isEmpty';

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
});
