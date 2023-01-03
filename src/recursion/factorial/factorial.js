import { memoize } from '../../exercises/memoization/memoziation';

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

export default memoize(factorial);
