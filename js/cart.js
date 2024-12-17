let cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function addToCart(id) {
    // Simpan item ke keranjang
    cart.push(id);
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = cart.map(id => `<div>Item ${id} <button onclick="removeFromCart(${id})">Remove</button></div>`).join('');
    cartTotal.textContent = cart.length * 10; // Example price
}
