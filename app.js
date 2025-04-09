const cart = [];

function addToCart(item) {
  cart.push(item);
  console.log(`${item} added to cart.`);
}

function viewCart() {
  console.log('Cart Contents:', cart);
}

