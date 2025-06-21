// Load produk dari localStorage
document.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    renderProductsByCategory(products);
});

function renderProductsByCategory(products) {
    const categories = {
        'mobile-legends': 'ml-products',
        'free-fire': 'ff-products',
        'pubg': 'pubg-products'
    };

    // Kosongkan semua container produk
    Object.values(categories).forEach(id => {
        document.getElementById(id).innerHTML = '';
    });

    // Render produk per kategori
    products.forEach(product => {
        if (categories[product.category]) {
            const container = document.getElementById(categories[product.category]);
            const card = createProductCard(product);
            container.appendChild(card);
        }
    });
}

function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
        <div class="card product-card">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-success font-weight-bold">Rp${product.price.toLocaleString()}</p>
                <button class="btn btn-primary btn-block buy-btn" 
                    onclick="buyProduct('${product.name}', ${product.price})">
                    <i class="fab fa-whatsapp"></i> Beli Sekarang
                </button>
            </div>
        </div>
    `;
    return col;
}

function buyProduct(name, price) {
    const userID = prompt('Masukkan ID Game Anda:');
    if (userID) {
        const phone = '+6281234567890'; // Ganti dengan nomor admin
        const message = `Halo Admin, saya ingin membeli:\n- Produk: ${name}\n- Harga: Rp${price.toLocaleString()}\n- ID Game: ${userID}`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    }
}
