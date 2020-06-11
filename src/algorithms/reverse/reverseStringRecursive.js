/**
 * Reverse string recursive implementation.
 *
 * @param {string} string
 * @return {string}
 */

(function reverStringRecursive(string) {
  return (string === '') ? '' : reverStringRecursive(string.subtr(1)) + string.charAt(0);
})();
