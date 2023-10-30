export function returnProductPrice(product) {
  const price = product.price * (product.discountPercentage / 100);
  const productPrice = Math.round(product.price - price);
  //console.log(actualPrice);
  return productPrice;
}
