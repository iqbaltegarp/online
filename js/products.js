const productList = document.getElementById('product-list');

const fetchProducts = async () => {
    const res = await fetch('api/get_products.php');
    const products = await res.json();
    productList.innerHTML = products.map(p => `
        <div class="product">
            <img src="${p.image}" alt="${p.name}">
            <div>
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <p>$${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
};

fetchProducts();
