import socketMerchant from './socketMerchant';

describe('socketMerchant()', () => {
  it('should return an integer representing the number of matching pairs of socks that are available.', () => {
    expect(socketMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
    expect(socketMerchant(7, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
    expect(socketMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4);
  });
});
