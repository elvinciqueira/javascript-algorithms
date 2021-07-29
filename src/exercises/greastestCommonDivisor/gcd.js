export function gcd(m, n) {
  if (n === 0) return m;
  return gcd(n, m % n);
}
