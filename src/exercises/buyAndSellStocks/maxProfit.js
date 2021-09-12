export const maxProfit = prices => {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (const price of prices) {
    const profit = price - minPrice;
    if (price < minPrice) {
      minPrice = price;
    } else if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};
