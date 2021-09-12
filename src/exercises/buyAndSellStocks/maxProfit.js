export const maxProfit = prices => {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (const price of prices) {
    const difference = price - minPrice;
    if (price < minPrice) {
      minPrice = price;
    } else if (difference > maxProfit) {
      maxProfit = difference;
    }
  }
  return maxProfit;
};
