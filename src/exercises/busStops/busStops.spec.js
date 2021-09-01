import { busStops } from './busStops';

describe('busStops()', () => {
  describe('when given an array of bus stops', () => {
    it('should return the number of people who are still in the bus after last bus station', () => {
      expect(
        busStops([
          [10, 0],
          [3, 5],
          [5, 8],
        ]),
      ).toBe(5);
      expect(
        busStops([
          [3, 0],
          [9, 1],
          [4, 10],
          [12, 2],
          [6, 1],
          [7, 10],
        ]),
      ).toBe(17);
      expect(
        busStops([
          [3, 0],
          [9, 1],
          [4, 8],
          [12, 2],
          [6, 1],
          [7, 8],
        ]),
      ).toBe(21);
    });
  });
});
