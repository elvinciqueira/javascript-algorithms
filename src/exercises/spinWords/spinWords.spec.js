import { spinWords } from './spinWords';

describe('spinWords', () => {
  test('spinWords("Welcome") should return emocleW', () => {
    expect(spinWords('Welcome')).toBe('emocleW');
  });

  test('spinWords("Hey fellow warriors") should return Hey wollef sroirraw', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });

  test('spinWords("This is a test") should return This is a test', () => {
    expect(spinWords('This is a test')).toBe('This is a test');
  });

  test('spinWords("This is another test") should return This is rehtona test', () => {
    expect(spinWords('This is another test')).toBe('This is rehtona test');
  });
});
