export const formatCurrency = (text) => {
  return new Intl.NumberFormat(`mg-MG`, {
    currency: "MGA",
    style: "currency",
  }).format(text);
};
