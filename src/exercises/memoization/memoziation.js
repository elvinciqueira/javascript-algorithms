export const memoize = cb => {
  const cache = {};
  return function memoized(arg) {
    if (cache[arg] === undefined) {
      console.log('calculated');
      cache[arg] = cb(arg);
    }
    console.log('cache');
    return cache[arg];
  };
};
