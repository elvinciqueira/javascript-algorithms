import { maximumDraws } from './maximumDraws';

describe('maximumDraws()', () => {
  describe('A person is getting ready to leave and needs a pair of matching socks. If there are  colors of socks in the drawer, how many socks need to be removed to be certain of having a matching pair?', () => {
    describe('There are  colors of socks in the drawer. If they remove  socks, they may not match.', () => {
      test('The minimum number to insure success is 3', () => {
        expect(maximumDraws(1)).toBe(2);
        expect(maximumDraws(9999999)).toBe(10000000);
        expect(maximumDraws(234)).toBe(235);
        expect(maximumDraws(508)).toBe(509);
      });
    });
  });
});
