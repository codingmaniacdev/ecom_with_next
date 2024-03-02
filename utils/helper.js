export const getDiscountPercentage = (originalPrice, discountedPrice) => {
  const discount = originalPrice - discountedPrice;
  const percentage = (discount / originalPrice) * 100;
  return Math.round(percentage) + '% Off';
}