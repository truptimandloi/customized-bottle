// Base price per bottle
const BASE_PRICE = 200;

// Extra charges
const LOGO_PRICE = 50;
const BRAND_TEXT_PRICE = 30;

// Bulk discount rules
const getBulkDiscount = (quantity) => {
  if (quantity >= 500) return 0.20; // 20% discount
  if (quantity >= 200) return 0.15; // 15% discount
  if (quantity >= 100) return 0.10; // 10% discount
  return 0;
};

export const calculatePrice = ({
  quantity = 1,
  hasLogo = false,
  hasBrandText = false,
}) => {
  let pricePerUnit = BASE_PRICE;

  if (hasLogo) {
    pricePerUnit += LOGO_PRICE;
  }

  if (hasBrandText) {
    pricePerUnit += BRAND_TEXT_PRICE;
  }

  const subtotal = pricePerUnit * quantity;

  const discountRate = getBulkDiscount(quantity);
  const discountAmount = subtotal * discountRate;

  const total = subtotal - discountAmount;

  return {
    basePrice: BASE_PRICE,
    pricePerUnit,
    subtotal,
    discountRate,
    discountAmount,
    total,
  };
};