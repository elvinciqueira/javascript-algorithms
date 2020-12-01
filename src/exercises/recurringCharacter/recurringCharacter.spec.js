import recurringCharacter from './recurringCharacter'

describe('Recurring Character', () => {
  test('return letter that repeat', () => {
    expect(recurringCharacter("Google")).toBe('o');
    expect(recurringCharacter("Banana")).toBe('a');
    expect(recurringCharacter("quertty")).toBe('t');
  })
})
