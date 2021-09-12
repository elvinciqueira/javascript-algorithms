import { maxProfit } from './maxProfit';

describe('maxProfit()', () => {
  describe('when given an array of stock prices', () => {
    it('should return the maximum profit', () => {
      expect(maxProfit([10, 7, 5, 8, 11, 9])).toBe(6);
    });

    it('should return 0 if no profit can be made', () => {
      expect(maxProfit([10, 9, 8, 7, 6, 5])).toBe(0);
    });
  });
});
