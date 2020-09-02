function powerset(n = '') {
  const array = Array.from(n)
  const base = ['']

  const results = array.reduce((previous, element) => {
    const previousPlusElement = previous.map(el => {
      return `${el}${element}`;
    })

    return previous.concat(previousPlusElement);
  }, base)

  return results
}

powerset('') // ...
// n = 0, f(n) = 1;
powerset('a') // , a...
// n = 1, f(n) = 2;
powerset('ab') // , a, b, ab...
// n = 2, f(n) = 4;
powerset('abc') // , a, b, ab, c, ac, bc, abc...
// n = 3, f(n) = 8;
powerset('abcd') // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 4, f(n) = 16;
powerset('abcde') // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 5, f(n) = 32;
