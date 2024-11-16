document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const productContainer = document.getElementById('product-container');
  const cartContainer = document.getElementById('cart-container');

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price.toFixed(2)} $</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
  });

  const cart = [];

  window.addToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    cart.push(selectedProduct);

    updateCartUI();
  };

  const updateCartUI = () => {
    cartContainer.innerHTML = '';
    cart.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      cartItemElement.innerHTML = `
        <p>${item.name}</p>
        <p>${item.price.toFixed(2)} $</p>
      `;
      cartContainer.appendChild(cartItemElement);
    });

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const totalElement = document.createElement('p');
    totalElement.innerHTML = `Total: ${totalPrice.toFixed(2)} $`;
    cartContainer.appendChild(totalElement);
  };
});
