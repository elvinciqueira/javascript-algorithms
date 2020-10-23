import repeatedCharacter from './repeatedCharacter';

describe('repeatedCharacter()', () => {
  it('should return the first letter that doesnt repeat', () => {
    expect(repeatedCharacter("Google")).toBe('l');
    expect(repeatedCharacter("Elvin")).toBe('e');
    expect(repeatedCharacter("Banana")).toBe('b');
    expect(repeatedCharacter("Abacaxi")).toBe('b');
  });
});
