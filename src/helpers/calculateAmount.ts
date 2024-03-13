export const calculateUsdtAmount = (
  coinAmount: string,
  price: number
): string | number => {
  const amount = parseFloat(coinAmount);
  if (isNaN(amount)) return 0;
  const usdtAmount = amount * price;
  return usdtAmount.toFixed(2);
};

export const calculateEthAmount = (
  coinAmount: string,
  price: number
): string | number => {
  const amount = parseFloat(coinAmount);
  if (isNaN(amount)) return 0;
  const ethAmount = amount / price;
  return ethAmount.toFixed(7);
};
