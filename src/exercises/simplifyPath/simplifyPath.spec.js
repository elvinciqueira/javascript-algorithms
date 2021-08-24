import simplifyPath from './simplifyPath';

describe('simplifyPath()', () => {
  describe('Given a absolute path', () => {
    test('normalize to a canonical path', () => {
      expect(simplifyPath('/home/')).toBe('/home');
      expect(simplifyPath('/home/../etc/./home')).toBe('/etc/home');
      expect(simplifyPath('/home/../')).toBe('/');
      expect(simplifyPath('/home/../home')).toBe('/home');
    });
  });
});
