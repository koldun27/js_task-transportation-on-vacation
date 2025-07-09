/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISC = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISC = 20;
  let totalCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISC;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    totalCost -= SHORT_TERM_DISC;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
