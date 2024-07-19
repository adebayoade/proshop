/**
 * The function `addDecimals` rounds a number to two decimal places.
 * @param num - The `addDecimals` function takes a number as input and returns the number with two
 * decimal places. The function first multiplies the input number by 100, rounds it to the nearest
 * integer, then divides it by 100 to get a number with two decimal places using the `toFixed(2
 * @returns The function `addDecimals` takes a number as input, multiplies it by 100, rounds the result
 * to the nearest integer, divides it by 100, and then returns the result as a string with exactly two
 * decimal places using the `toFixed(2)` method.
 */
function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

// NOTE: the code below has been changed from the course code to fix an issue
// with type coercion of strings to numbers.
// Our addDecimals function expects a number and returns a string, so it is not
// correct to call it passing a string as the argument.

/**
 * The function `calcPrices` calculates the prices for order items including items price, shipping
 * price, tax price, and total price.
 * @param orderItems - The `calcPrices` function takes an array of `orderItems` as input. Each
 * `orderItem` in the array is an object with properties `price` and `qty` representing the price and
 * quantity of that item in the order.
 * @returns The `calcPrices` function returns an object with the following properties:
 * - `itemsPrice`: The total price of all order items in whole numbers (pennies), converted to a string
 * with 2 decimal places.
 * - `shippingPrice`: The shipping price, either 0 or 10, converted to a string with 2 decimal places.
 * - `taxPrice`: The tax price calculated as
 */
export function calcPrices(orderItems) {
  // Calculate the items price in whole number (pennies) to avoid issues with
  // floating point number calculations
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );

  // Calculate the shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;

  // Calculate the tax price
  const taxPrice = 0.15 * itemsPrice;

  // Calculate the total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  // return prices as strings fixed to 2 decimal places
  return {
    itemsPrice: addDecimals(itemsPrice),
    shippingPrice: addDecimals(shippingPrice),
    taxPrice: addDecimals(taxPrice),
    totalPrice: addDecimals(totalPrice),
  };
}
