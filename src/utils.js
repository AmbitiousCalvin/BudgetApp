export const currencyFormatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD", // Corrected 'usd' to 'USD'
  minimumFractionDigits: 0,
});
