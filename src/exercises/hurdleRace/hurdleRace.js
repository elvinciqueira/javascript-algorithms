/**
 * @param {number} k
 * @param {array} height
 * @return {boolean}
 */

export default function hurdleRace(k, height) {
  return Math.max(0, Math.max(...height) - k);
}
