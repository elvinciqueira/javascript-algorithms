export const countJewels = (jewels, stones) => {
  const hash = {};

  for (let i = 0; i < jewels.length; i++) {
    hash[jewels[i]] = true;
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (hash[stones[i]]) {
      count++;
    }
  }

  return count;
};
