import { joinElements } from './joinElements-recursive';

describe('joinElements()', () => {
  it('given an array of strings and an string to join then return string joined', () => {
    expect(joinElements(['s', 'cr', 't cod', ' :) :)'], 'e')).toBe(
      'secret code :) :)',
    );
  });
});
