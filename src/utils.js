export const currencyFormatter = (value) => {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(2)}T USD`;
  } else if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(2)}B USD`;
  } else if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}M USD`;
  } else {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  }
};
