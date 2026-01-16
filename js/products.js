// ============================================
// BASE DE DATOS DE PRODUCTOS
// ============================================
const products = [
    {
        id: 1,
        name: 'Kefir Natural Clásico',
        category: 'kefir',
        price: 'S/ 15.00',
        description: 'Kefir de leche 100% natural, fermentado por 24 horas con nódulos auténticos.',
        features: [
            'Billones de probióticos vivos',
            'Sin azúcares añadidos',
            'Fermentación de 24 horas',
            'Presentación: 1 litro'
        ],
        icon: '🥛',
        badge: 'Popular',
        featured: true
    },
    {
        id: 2,
        name: 'Kefir de Coco',
        category: 'kefir',
        price: 'S/ 18.00',
        description: 'Alternativa vegana elaborada con leche de coco orgánica, perfecta para intolerantes a la lactosa.',
        features: [
            '100% vegano',
            'Leche de coco orgánica',
            'Rico en probióticos',
            'Presentación: 750ml'
        ],
        icon: '🥥',
        badge: 'Vegano',
        featured: true
    },
    {
        id: 3,
        name: 'Smoothie de Kefir con Frutas',
        category: 'preparados',
        price: 'S/ 12.00',
        description: 'Delicioso smoothie de kefir natural mezclado con frutas frescas de estación.',
        features: [
            'Frutas frescas del día',
            'Sin azúcar refinada',
            'Listo para tomar',
            'Presentación: 500ml'
        ],
        icon: '🍓',
        badge: 'Nuevo',
        featured: true
    },
    {
        id: 4,
        name: 'Kefir Saborizado Vainilla',
        category: 'bebidas',
        price: 'S/ 16.00',
        description: 'Kefir natural con un toque suave de vainilla natural, ligeramente endulzado con miel.',
        features: [
            'Vainilla natural',
            'Endulzado con miel de abeja',
            'Sabor suave y cremoso',
            'Presentación: 1 litro'
        ],
        icon: '🍦',
        badge: '',
        featured: false
    },
    {
        id: 5,
        name: 'Kefir Saborizado Fresa',
        category: 'bebidas',
        price: 'S/ 16.00',
        description: 'Refrescante kefir con pulpa natural de fresa, ideal para toda la familia.',
        features: [
            'Fresas naturales',
            'Color natural',
            'Sabor delicioso',
            'Presentación: 1 litro'
        ],
        icon: '🍓',
        badge: '',
        featured: false
    },
    {
        id: 6,
        name: 'Parfait de Kefir',
        category: 'preparados',
        price: 'S/ 14.00',
        description: 'Capas de kefir cremoso, granola artesanal y frutas frescas. ¡Un desayuno perfecto!',
        features: [
            'Granola casera',
            'Frutas de estación',
            'Alto en fibra',
            'Presentación: vaso de 400ml'
        ],
        icon: '🥣',
        badge: '',
        featured: false
    },
    {
        id: 7,
        name: 'Bowl de Kefir y Açaí',
        category: 'preparados',
        price: 'S/ 18.00',
        description: 'Energético bowl de kefir con açaí, frutas tropicales y toppings saludables.',
        features: [
            'Açaí orgánico',
            'Toppings variados',
            'Super nutritivo',
            'Presentación: bowl de 500ml'
        ],
        icon: '🍇',
        badge: 'Premium',
        featured: false
    },
    {
        id: 8,
        name: 'Kefir de Agua',
        category: 'bebidas',
        price: 'S/ 12.00',
        description: 'Bebida probiótica refrescante a base de agua, frutas y tibicos. Naturalmente efervescente.',
        features: [
            'Naturalmente burbujeante',
            'Bajo en calorías',
            'Sabores frutales',
            'Presentación: 750ml'
        ],
        icon: '💧',
        badge: 'Light',
        featured: true
    },
    {
        id: 9,
        name: 'Dip de Kefir con Hierbas',
        category: 'preparados',
        price: 'S/ 10.00',
        description: 'Cremoso dip elaborado con kefir colado, hierbas frescas y especias. Perfecto para snacks.',
        features: [
            'Hierbas frescas',
            'Bajo en grasa',
            'Ideal para vegetales',
            'Presentación: 250ml'
        ],
        icon: '🌿',
        badge: '',
        featured: false
    },
    {
        id: 10,
        name: 'Pack Familiar Kefir',
        category: 'kefir',
        price: 'S/ 40.00',
        description: 'Pack económico con 3 litros de kefir natural. ¡Perfecto para toda la familia!',
        features: [
            '3 litros de kefir',
            'Ahorro de 15%',
            'Entrega en envases retornables',
            'Ideal para consumo semanal'
        ],
        icon: '👨‍👩‍👧‍👦',
        badge: 'Ahorro',
        featured: false
    },
    {
        id: 11,
        name: 'Kefir Saborizado Mango',
        category: 'bebidas',
        price: 'S/ 16.00',
        description: 'Tropical y refrescante kefir con pulpa de mango peruano. Una explosión de sabor.',
        features: [
            'Mango peruano',
            'Sabor tropical',
            'Rico en vitamina C',
            'Presentación: 1 litro'
        ],
        icon: '🥭',
        badge: '',
        featured: false
    },
    {
        id: 12,
        name: 'Kit Inicial de Kefir',
        category: 'kefir',
        price: 'S/ 35.00',
        description: 'Kit completo para hacer tu propio kefir en casa. Incluye nódulos, instructivo y 1L de kefir.',
        features: [
            'Nódulos de kefir vivos',
            'Manual de instrucciones',
            '1 litro de kefir inicial',
            'Soporte por WhatsApp'
        ],
        icon: '📦',
        badge: 'Kit',
        featured: false
    }
];

// ============================================
// RENDERIZAR PRODUCTOS
// ============================================
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                ${product.icon}
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <ul class="product-features">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <button class="product-btn">Comprar</button>
                </div>
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        'kefir': 'Kefir Natural',
        'preparados': 'Preparados',
        'bebidas': 'Bebidas'
    };
    return categories[category] || category;
}

// ============================================
// CARGAR PRODUCTOS DESTACADOS EN INDEX
// ============================================
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    
    if (featuredContainer) {
        const featuredProducts = products.filter(p => p.featured);
        const html = featuredProducts.map(product => createProductCard(product)).join('');
        featuredContainer.innerHTML = html;
    }
}

// ============================================
// CARGAR TODOS LOS PRODUCTOS EN PÁGINA DE PRODUCTOS
// ============================================
function loadAllProducts() {
    const allProductsContainer = document.getElementById('all-products');
    
    if (allProductsContainer) {
        const html = products.map(product => createProductCard(product)).join('');
        allProductsContainer.innerHTML = html;
    }
}

// ============================================
// INICIALIZAR AL CARGAR LA PÁGINA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    loadAllProducts();
});

// ============================================
// BÚSQUEDA DE PRODUCTOS (Función adicional)
// ============================================
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
}

// ============================================
// ORDENAR PRODUCTOS
// ============================================
function sortProducts(criteria) {
    switch(criteria) {
        case 'price-asc':
            return [...products].sort((a, b) => {
                const priceA = parseFloat(a.price.replace('S/ ', ''));
                const priceB = parseFloat(b.price.replace('S/ ', ''));
                return priceA - priceB;
            });
        case 'price-desc':
            return [...products].sort((a, b) => {
                const priceA = parseFloat(a.price.replace('S/ ', ''));
                const priceB = parseFloat(b.price.replace('S/ ', ''));
                return priceB - priceA;
            });
        case 'name':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        default:
            return products;
    }
}

// ============================================
// OBTENER PRODUCTO POR ID
// ============================================
function getProductById(id) {
    return products.find(product => product.id === id);
}

// ============================================
// ESTADÍSTICAS DE PRODUCTOS
// ============================================
function getProductStats() {
    return {
        total: products.length,
        byCategory: {
            kefir: products.filter(p => p.category === 'kefir').length,
            preparados: products.filter(p => p.category === 'preparados').length,
            bebidas: products.filter(p => p.category === 'bebidas').length
        },
        featured: products.filter(p => p.featured).length
    };
}

// Log de estadísticas (solo en desarrollo)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('📊 Estadísticas de productos:', getProductStats());
}

// Exportar funciones para uso en otros scripts si es necesario
window.ProductsDB = {
    products,
    searchProducts,
    sortProducts,
    getProductById,
    getProductStats
};