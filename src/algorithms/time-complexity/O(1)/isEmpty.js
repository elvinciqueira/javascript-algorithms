/**
 * Return true if an array is empty and false otherwise
 * @param {array|string} thing
 * @example
 * isEmpty() // => true
 * isEmpty([]) // => true
 * isEmpty('') // => true
 * isEmpty([8, 9, 6]) // => false
 * isEmpty('text') // => false
 */

export default function isEmpty(thing) {
  return !thing || thing.length < 1;
}
