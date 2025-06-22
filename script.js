// ข้อมูลสินค้าพร้อมรูปจริง
const products = [
    // อิเล็กทรอนิกส์
    { 
        id: 1, 
        name: 'iPhone 15 Pro', 
        price: 39900, 
        category: 'electronics', 
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 2, 
        name: 'Samsung Galaxy S24', 
        price: 29900, 
        category: 'electronics', 
        image: 'https://images.unsplash.com/photo-1610792516286-524726503fb2?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 3, 
        name: 'MacBook Air M3', 
        price: 44900, 
        category: 'electronics', 
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 4, 
        name: 'iPad Pro', 
        price: 34900, 
        category: 'electronics', 
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 5, 
        name: 'AirPods Pro', 
        price: 8900, 
        category: 'electronics', 
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 6, 
        name: 'PlayStation 5', 
        price: 17900, 
        category: 'electronics', 
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop&crop=center'
    },
    // แฟชั่น
    { 
        id: 7, 
        name: 'เสื้อยืดคอตตอน', 
        price: 390, 
        category: 'fashion', 
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 8, 
        name: 'กางเกงยีนส์', 
        price: 890, 
        category: 'fashion', 
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 9, 
        name: 'รองเท้าผ้าใบ', 
        price: 1290, 
        category: 'fashion', 
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 10, 
        name: 'กระเป๋าสะพาย', 
        price: 990, 
        category: 'fashion', 
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 11, 
        name: 'นาฬิกาข้อมือ', 
        price: 2990, 
        category: 'fashion', 
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center'
    },
    { 
        id: 12, 
        name: 'แว่นตากันแดด', 
        price: 690, 
        category: 'fashion', 
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center'
    },
    // ของใช้ในบ้าน
    { 
        id: 13, 
        name: 'โซฟาหนัง', 
        price: 12900, 
        category: 'home', 
        image: 'https://www.divanostudio.com/wp-content/uploads/2016/09/rainny-burgandy.jpg'
    },
    { 
        id: 14, 
        name: 'โต๊ะทำงาน', 
        price: 3990, 
        category: 'home', 
        image: 'https://www.kioskthailand.com/api/file/images/al160-ov_1668583419712.jpg'
    },
    { 
        id: 15, 
        name: 'เก้าอี้สำนักงาน', 
        price: 2490, 
        category: 'home', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3HK83qhM9Pb8RHXmq8kzWkunWWpDsK5D9Q&s'
    },
    { 
        id: 16, 
        name: 'หม้อหุงข้าว', 
        price: 269, 
        category: 'home', 
        image: 'https://down-th.img.susercontent.com/file/th-11134207-7rasc-m4soxylf2g3b2a'
    },
    { 
        id: 17, 
        name: 'เครื่องฟอกอากาศ', 
        price: 4990, 
        category: 'home', 
        image: 'https://www.anyhome.com/wp-content/uploads/2022/03/1209849_0.jpg'
    },
    { 
        id: 18, 
        name: 'โคมไฟตั้งโต๊ะ', 
        price: 790, 
        category: 'home', 
        image: 'https://down-th.img.susercontent.com/file/th-11134207-7r98o-m01b6tc4okg1ca'
    },
    // หนังสือ
    { 
        id: 19, 
        name: 'นิยายแฟนตาซี', 
        price: 290, 
        category: 'books', 
        image: 'https://image.dek-d.com/contentimg/2016/orn/imrs.jpg'
    },
    { 
        id: 20, 
        name: 'หนังสือการ์ตูน', 
        price: 150, 
        category: 'books', 
        image: 'https://engedthailand.com/wp-content/uploads/2024/09/DALL%C2%B7E-2024-09-10-14.17.11-An-educational-and-engaging-scene-featuring-English-comic-books-focused-on-learning-and-fun-facts.-The-comic-books-are-open-on-a-table-showcasing-col.webp'
    },
    { 
        id: 21, 
        name: 'หนังสือพัฒนาตนเอง', 
        price: 450, 
        category: 'books', 
        image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/8/2024/01/30125836/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%95%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87-1600x900.jpg'
    },
    { 
        id: 22, 
        name: 'หนังสือเรียนภาษาอังกฤษ', 
        price: 590, 
        category: 'books', 
        image: 'https://img.th.my-best.com/product_images/1e486da86c7c2a3c6f7e40b89fefdc1b.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=3218a56b0fd00502ecbbfafe6bcf9f63'
    },
    { 
        id: 23, 
        name: 'หนังสือสอนโปรแกรม', 
        price: 790, 
        category: 'books', 
        image: 'https://api.chulabook.com/images/pid-223733.jpg'
    },
    { 
        id: 24, 
        name: 'หนังสือการเงิน', 
        price: 390, 
        category: 'books', 
        image: 'https://missiontothemoon.co/wp-content/uploads/2022/09/1200-5-%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD-%E2%80%98%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%84%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%A3%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%8B%E0%B8%B1%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95.jpg'
    }
];

// ตะกร้าสินค้า
let cart = [];

// โหลดข้อมูลตะกร้าจาก localStorage (หากมี)
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// บันทึกตะกร้าลง localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// แสดงหน้าต่างๆ
function showPage(pageId) {
    // ซ่อนหน้าทั้งหมด
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // แสดงหน้าที่เลือก
    document.getElementById(pageId).classList.add('active');
    
    // อัพเดต navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // เพิ่ม active class ให้ nav ที่ตรงกัน
    const activeNav = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeNav && activeNav.classList.contains('nav-link')) {
        activeNav.classList.add('active');
    }
    
    // โหลดสินค้าเมื่อเปิดหน้าสินค้า
    if (pageId === 'products') {
        displayProducts();
    } else if (pageId === 'cart') {
        displayCart();
    } else if (pageId === 'checkout') {
        updateCheckoutTotal();
    }
}

// แสดงสินค้า
function displayProducts(category = 'all') {
    const container = document.getElementById('products-container');
    let filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'">
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">฿${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    เพิ่มในตะกร้า
                </button>
            </div>
        </div>
    `).join('');
}

// กรองสินค้าตามหมวดหมู่
function filterProducts(category, event = null) {
    displayProducts(category);
    
    // อัพเดตปุ่มกรอง
    if (event) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    } else {
        // หากเรียกจากหน้าแรก
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => btn.classList.remove('active'));
        const categoryBtn = document.querySelector(`[onclick*="${category}"]`);
        if (categoryBtn && categoryBtn.classList.contains('filter-btn')) {
            categoryBtn.classList.add('active');
        }
    }
}

// เพิ่มสินค้าในตะกร้า
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    
    // แสดงการแจ้งเตือน
    showNotification('เพิ่มสินค้าในตะกร้าแล้ว!');
}

// อัพเดต UI ตะกร้า
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

// แสดงตะกร้าสินค้า
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalSection = document.getElementById('cart-total-section');
    const totalAmount = document.getElementById('total-amount');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>ตะกร้าของคุณว่างเปล่า</h2>
                <p>เริ่มช็อปปิ้งเพื่อเพิ่มสินค้าในตะกร้า</p>
                <a href="#" class="btn" onclick="showPage('products')">เริ่มช็อปปิ้ง</a>
            </div>
        `;
        cartTotalSection.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80?text=No+Image'">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">฿${item.price.toLocaleString()}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">ลบ</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `฿${total.toLocaleString()}`;
    cartTotalSection.style.display = 'block';
}

// อัพเดตจำนวนสินค้า
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
            displayCart();
        }
    }
}

// ลบสินค้าจากตะกร้า
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    displayCart();
    showNotification('ลบสินค้าจากตะกร้าแล้ว!');
}

// อัพเดตยอดรวมในหน้าชำระเงิน
function updateCheckoutTotal() {
    const checkoutTotal = document.getElementById('checkout-total');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = `฿${total.toLocaleString()}`;
}

// แสดงการแจ้งเตือน
function showNotification(message) {
    // สร้าง notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // เพิ่ม CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // ลบหลังจาก 3 วินาที
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
}

// จัดการฟอร์มชำระเงิน
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert('ตะกร้าของคุณว่างเปล่า');
                return;
            }
            
            // จำลองการส่งข้อมูล
            const formData = new FormData(checkoutForm);
            const orderData = {
                items: cart,
                customer: Object.fromEntries(formData),
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                orderDate: new Date().toISOString()
            };
            
            // แสดงข้อความยืนยัน
            alert(`ขอบคุณสำหรับการสั่งซื้อ!\nหมายเลขคำสั่งซื้อ: #${Date.now()}\nยอดรวม: ฿${orderData.total.toLocaleString()}`);
            
            // เคลียร์ตะกร้า
            cart = [];
            saveCart();
            updateCartUI();
            
            // กลับไปหน้าแรก
            showPage('home');
            checkoutForm.reset();
        });
    }
    
    // โหลดข้อมูลตะกร้า
    loadCart();
    
    // แสดงสินค้าในหน้าแรก
    displayProducts();
});