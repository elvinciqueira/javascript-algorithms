import birthdayCake from './birthdayCake';

describe('birthdayCake()', () => {
  it('should count how many candles are tallest.', () => {
    expect(birthdayCake([3, 2, 1, 3])).toBe(2);
    expect(birthdayCake([4, 4, 1, 3])).toBe(2);
  });
});
