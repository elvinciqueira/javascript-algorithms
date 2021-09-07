import { count } from './count';

test('count([2, 3, 4]) should return 3', () => {
  expect(count([2, 3, 4])).toBe(3);
});

test('count([2, 3, 4, 5]) should return 4', () => {
  expect(count([2, 3, 4, 5])).toBe(4);
});
