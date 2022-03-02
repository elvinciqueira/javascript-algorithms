import { problemSet } from './index';

describe('for n problems to the participants', () => {
  test('the numbers of problems the friends will implement on the cost', () => {
    expect(
      problemSet([
        [1, 1, 0],
        [1, 1, 1],
        [1, 0, 0],
      ]),
    ).toBe(2);
    expect(
      problemSet([
        [1, 0, 0],
        [0, 1, 1],
      ]),
    ).toBe(1);
    expect(
      problemSet([
        [1, 1, 0],
        [0, 1, 1],
      ]),
    ).toBe(2);
    expect(
      problemSet([
        [1, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 0],
      ]),
    ).toBe(1);
  });
});
