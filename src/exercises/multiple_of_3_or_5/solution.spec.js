import { solution } from './solution';

describe('If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.', () => {
  it('should return the sum of all multiples of 3 or 5 below 10', () => {
    expect(solution(10)).toEqual(23);
  });
});
