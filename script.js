// Products Data
const products = [
    { id: 1, name: 'Monstera Deliciosa', price: 45, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80', category: 'Plants', plantType: 'Indoor', tag: 'Popular', description: 'Beautiful tropical plant with iconic split leaves, perfect for brightening any indoor space' },
    { id: 2, name: 'Snake Plant', price: 32, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=800&q=80', category: 'Plants', plantType: 'Indoor', tag: 'New', description: 'Low-maintenance air-purifying plant ideal for beginners' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 65, image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b2b?w=800&q=80', category: 'Plants', plantType: 'Indoor', tag: 'Popular', description: 'Statement plant with large violin-shaped leaves' },
    { id: 4, name: 'Pothos', price: 28, image: 'https://images.unsplash.com/photo-1632207691143-643e2bc7f86a?w=800&q=80', category: 'Plants', plantType: 'Indoor', description: 'Easy-care trailing plant perfect for hanging baskets' },
    { id: 5, name: 'Peace Lily', price: 38, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800&q=80', category: 'Plants', plantType: 'Indoor', description: 'Elegant flowering plant that thrives in low light' },
    { id: 6, name: 'Rubber Plant', price: 42, image: 'https://images.unsplash.com/photo-1614594748992-1d039c021db0?w=800&q=80', category: 'Plants', plantType: 'Indoor', description: 'Bold glossy leaves bring a modern touch to any room' },
    { id: 7, name: 'Lavender', price: 22, image: 'https://images.unsplash.com/photo-1595419828906-ff0c9736dd58?w=800&q=80', category: 'Plants', plantType: 'Outdoor', description: 'Fragrant herb perfect for gardens and outdoor spaces' },
    { id: 8, name: 'Bamboo Palm', price: 55, image: 'https://images.unsplash.com/photo-1608652840654-5451f8e8b5ea?w=800&q=80', category: 'Plants', plantType: 'Indoor', description: 'Tropical palm that adds natural elegance to your home' },
    { id: 9, name: 'Succulent Mix', price: 18, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80', category: 'Plants', plantType: 'Succulents', tag: 'New', description: 'Collection of colorful drought-tolerant succulents' },
    { id: 10, name: 'Aloe Vera', price: 24, image: 'https://images.unsplash.com/photo-1596492809116-1c0e20d26c8a?w=800&q=80', category: 'Plants', plantType: 'Succulents', description: 'Medicinal plant with soothing gel-filled leaves' },
    { id: 11, name: 'Jade Plant', price: 30, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80', category: 'Plants', plantType: 'Succulents', description: 'Lucky plant with thick jade-green leaves' },
    { id: 12, name: 'Orchid', price: 48, image: 'https://images.unsplash.com/photo-1594668578674-5f5fadee1b4c?w=800&q=80', category: 'Plants', plantType: 'Flowering', tag: 'Popular', description: 'Elegant exotic flowering plant' },
    { id: 13, name: 'Cactus Collection', price: 35, image: 'https://images.unsplash.com/photo-1509223197845-458d87a8b8c3?w=800&q=80', category: 'Plants', plantType: 'Succulents', description: 'Assorted desert cacti collection' },
    { id: 14, name: 'Bird of Paradise', price: 78, image: 'https://images.unsplash.com/photo-1616781710094-567a3c0d8b08?w=800&q=80', category: 'Plants', plantType: 'Indoor', description: 'Dramatic tropical plant with large banana-like leaves' },
    { id: 15, name: 'String of Pearls', price: 26, image: 'https://images.unsplash.com/photo-1614594737681-aae1c41f562e?w=800&q=80', category: 'Plants', plantType: 'Succulents', description: 'Unique trailing succulent with pearl-shaped leaves' },
    { id: 16, name: 'ZZ Plant', price: 40, image: 'https://images.unsplash.com/photo-1632207691143-643e2bc7f86a?w=800&q=80', category: 'Plants', plantType: 'Indoor', description: 'Nearly indestructible plant with glossy foliage' },
    { id: 17, name: 'Ceramic Pot Set', price: 45, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80', category: 'Accessories', plantType: 'Accessories', description: 'Beautiful set of handcrafted ceramic planters' },
    { id: 18, name: 'Watering Can', price: 22, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', category: 'Accessories', plantType: 'Accessories', description: 'Elegant copper watering can for your plants' },
    { id: 19, name: 'Plant Food', price: 15, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80', category: 'Accessories', plantType: 'Accessories', description: 'Organic nutrient-rich plant fertilizer' },
    { id: 20, name: 'Pruning Shears', price: 18, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', category: 'Accessories', plantType: 'Accessories', description: 'Professional-grade stainless steel pruning shears' }
];

const testimonials = [
    { id: 1, name: 'Sarah Johnson', location: 'New York, USA', rating: 5, text: "The quality of plants is exceptional! My fiddle leaf fig arrived in perfect condition and is thriving beautifully in my living room.", image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80', plantImage: 'https://images.unsplash.com/photo-1654179280639-3de6d9d7f996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { id: 2, name: 'Michael Chen', location: 'San Francisco, USA', rating: 5, text: "Best plant shopping experience! The team helped me choose perfect plants for my apartment. Highly recommend!", image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80', plantImage: 'https://images.unsplash.com/photo-1721932547078-38a815bb6b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { id: 3, name: 'Emma Davis', location: 'Los Angeles, USA', rating: 5, text: "As a beginner, I found the perfect low-maintenance plants. Everything is still alive and beautiful after months!", image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80', plantImage: 'https://images.unsplash.com/photo-1749703870011-8ad8fc1dcf73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { id: 4, name: 'David Martinez', location: 'Austin, USA', rating: 5, text: "Amazing selection and customer service! My home office looks incredible with these beautiful plants. Delivery was super fast too!", image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80', plantImage: 'https://images.unsplash.com/photo-1655151071844-746b090106d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { id: 5, name: 'Lisa Anderson', location: 'Seattle, USA', rating: 5, text: "I've transformed my entire apartment into a green oasis! The plants are healthy and the care tips are incredibly helpful.", image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80', plantImage: 'https://images.unsplash.com/photo-1660327413070-c771d88ab7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { id: 6, name: 'James Wilson', location: 'Portland, USA', rating: 5, text: "My succulent collection keeps growing thanks to this amazing shop. Perfect for my desk and windowsills!", image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80', plantImage: 'https://images.unsplash.com/photo-1762542531324-29b0db22718a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' }
];

// State
let selectedCategory = 'All';
let selectedPriceRanges = [];
let selectedPlantTypes = [];
let showAllProducts = false;
let filterSidebarOpen = true; // 데스크톱에서 기본적으로 열려있음
let currentTestimonialIndex = 0;
let testimonialAutoplay;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Render products
    renderProducts();

    // Setup event listeners
    setupEventListeners();

    // Setup testimonials
    setupTestimonials();

    // Update cart count
    updateCartCount();

    // Check window size for filters
    if (window.innerWidth >= 1024) {
        document.getElementById('filtersSidebar').classList.add('active');
        document.getElementById('filterToggleText').textContent = 'Hide Filters';
    }
});

function setupEventListeners() {
    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.toggle('active');
    });

    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            selectedCategory = this.dataset.category;
            applyFilters();
        });
    });

    // Filter toggle
    const filterToggle = document.getElementById('filterToggle');
    if (filterToggle) {
        filterToggle.addEventListener('click', function() {
            filterSidebarOpen = !filterSidebarOpen;
            const sidebar = document.getElementById('filtersSidebar');
            const text = document.getElementById('filterToggleText');
            if (filterSidebarOpen) {
                sidebar.classList.add('active');
                text.textContent = 'Hide Filters';
            } else {
                sidebar.classList.remove('active');
                text.textContent = 'Show Filters';
            }
            renderProducts();
        });
    }

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);

    // Mobile filter
    document.getElementById('mobileFilterBtn').addEventListener('click', function() {
        document.getElementById('mobileFilterModal').classList.add('active');
        setupMobileFilters();
    });

    document.getElementById('closeMobileFilter').addEventListener('click', function() {
        document.getElementById('mobileFilterModal').classList.remove('active');
    });

    document.getElementById('mobileClearFilters').addEventListener('click', function() {
        clearAllFilters();
        document.getElementById('mobileFilterModal').classList.remove('active');
    });

    document.getElementById('mobileApplyFilters').addEventListener('click', function() {
        document.getElementById('mobileFilterModal').classList.remove('active');
    });

    // Load more
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            showAllProducts = true;
            renderProducts();
        });
    }

    const showLessBtn = document.getElementById('showLessBtn');
    if (showLessBtn) {
        showLessBtn.addEventListener('click', function() {
            showAllProducts = false;
            renderProducts();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Newsletter
    document.getElementById('newsletterForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        console.log('Newsletter signup:', email);
        alert('Thank you for subscribing!');
        document.getElementById('newsletterEmail').value = '';
    });

    // Order tracking - Snipcart 고객 주문 조회 기능
    document.getElementById('orderTrackBtn').addEventListener('click', function() {
        if (window.Snipcart) {
            // Snipcart 장바구니를 열고 고객 계정 섹션으로 이동
            window.Snipcart.api.theme.cart.open();
            // 사용자가 로그인하면 주문 내역을 볼 수 있음
        }
    });
    
    document.getElementById('footerOrderTrack').addEventListener('click', function(e) {
        e.preventDefault();
        if (window.Snipcart) {
            // Snipcart 장바구니를 열고 고객 계정 섹션으로 이동
            window.Snipcart.api.theme.cart.open();
            // 사용자가 로그인하면 주문 내역을 볼 수 있음
        }
    });

    // FAQ Panel
    document.getElementById('footerFAQ').addEventListener('click', function(e) {
        e.preventDefault();
        openFAQPanel();
    });
    document.getElementById('faqPanelClose').addEventListener('click', closeFAQPanel);
    document.getElementById('faqPanelBackdrop').addEventListener('click', closeFAQPanel);

    // Shipping - Snipcart 장바구니로 연결
    document.getElementById('footerShipping').addEventListener('click', function(e) {
        e.preventDefault();
        if (window.Snipcart) {
            window.Snipcart.api.theme.cart.open();
        }
    });

    // Returns - Snipcart 장바구니로 연결
    document.getElementById('footerReturns').addEventListener('click', function(e) {
        e.preventDefault();
        if (window.Snipcart) {
            window.Snipcart.api.theme.cart.open();
        }
    });

    // Snipcart events
    if (window.Snipcart) {
        document.addEventListener('snipcart.ready', function() {
            window.Snipcart.store.subscribe(updateCartCount);
        });
    }
}

function setupMobileFilters() {
    const content = document.getElementById('mobileFiltersContent');
    content.innerHTML = '';

    if (selectedCategory !== 'Accessories') {
        const plantTypeHTML = `
            <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #f3f4f6;">
                <h4 style="font-weight: 600; color: var(--color-dark-green); margin-bottom: 1rem;">Plant Type</h4>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    ${['Indoor', 'Outdoor', 'Succulents', 'Flowering'].map(type => `
                        <label class="checkbox-label">
                            <input type="checkbox" value="${type}" ${selectedPlantTypes.includes(type) ? 'checked' : ''} onchange="applyFilters()">
                            <span>${type}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        content.innerHTML += plantTypeHTML;
    }

    const priceHTML = `
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-weight: 600; color: var(--color-dark-green); margin-bottom: 1rem;">Price Range</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${[{label: 'Under $25', value: '0-25'}, {label: '$25 - $50', value: '25-50'}, {label: '$50 - $100', value: '50-100'}, {label: 'Over $100', value: '100-999999'}].map(range => `
                    <label class="checkbox-label">
                        <input type="checkbox" value="${range.value}" ${selectedPriceRanges.includes(range.value) ? 'checked' : ''} onchange="applyFilters()">
                        <span>${range.label}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    content.innerHTML += priceHTML;
}

function toggleFilterGroup(group) {
    const options = document.getElementById(group + 'Options');
    const icon = document.getElementById(group + 'Icon');
    options.classList.toggle('hidden');
    if (options.classList.contains('hidden')) {
        icon.innerHTML = '<path d="m6 9 6 6 6-6"/>';
    } else {
        icon.innerHTML = '<path d="m18 15-6-6-6 6"/>';
    }
}

function applyFilters() {
    // Get plant types
    selectedPlantTypes = Array.from(document.querySelectorAll('#plantTypeOptions input:checked, #mobileFiltersContent input[value="Indoor"]:checked, #mobileFiltersContent input[value="Outdoor"]:checked, #mobileFiltersContent input[value="Succulents"]:checked, #mobileFiltersContent input[value="Flowering"]:checked'))
        .map(cb => cb.value);

    // Get price ranges
    selectedPriceRanges = Array.from(document.querySelectorAll('#priceRangeOptions input:checked, #mobileFiltersContent input[value="0-25"]:checked, #mobileFiltersContent input[value="25-50"]:checked, #mobileFiltersContent input[value="50-100"]:checked, #mobileFiltersContent input[value="100-999999"]:checked'))
        .map(cb => cb.value);

    renderProducts();
    updateActiveFilters();
}

function clearAllFilters() {
    selectedCategory = 'All';
    selectedPriceRanges = [];
    selectedPlantTypes = [];
    showAllProducts = false;

    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.category-tab[data-category="All"]').classList.add('active');
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

    renderProducts();
    updateActiveFilters();
}

function updateActiveFilters() {
    const activeFiltersDiv = document.getElementById('activeFilters');
    const activeFilterTags = document.getElementById('activeFilterTags');
    const clearBtn = document.getElementById('clearFilters');

    const hasFilters = selectedPriceRanges.length > 0 || selectedPlantTypes.length > 0;

    if (hasFilters) {
        activeFiltersDiv.classList.remove('hidden');
        clearBtn.classList.remove('hidden');
    } else {
        activeFiltersDiv.classList.add('hidden');
        clearBtn.classList.add('hidden');
    }

    let tagsHTML = '';
    
    selectedPriceRanges.forEach(range => {
        const labels = {'0-25': 'Under $25', '25-50': '$25 - $50', '50-100': '$50 - $100', '100-999999': 'Over $100'};
        tagsHTML += `
            <div class="filter-tag">
                <span>${labels[range]}</span>
                <button onclick="removeFilter('price', '${range}')">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
        `;
    });

    selectedPlantTypes.forEach(type => {
        tagsHTML += `
            <div class="filter-tag">
                <span>${type}</span>
                <button onclick="removeFilter('plantType', '${type}')">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
        `;
    });

    activeFilterTags.innerHTML = tagsHTML;
}

function removeFilter(type, value) {
    if (type === 'price') {
        selectedPriceRanges = selectedPriceRanges.filter(r => r !== value);
    } else {
        selectedPlantTypes = selectedPlantTypes.filter(t => t !== value);
    }
    
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        if (cb.value === value) cb.checked = false;
    });

    renderProducts();
    updateActiveFilters();
}

function renderProducts() {
    // Hide plant type filter if accessories
    const plantTypeFilter = document.getElementById('plantTypeFilter');
    if (selectedCategory === 'Accessories') {
        plantTypeFilter.classList.add('hidden');
    } else {
        plantTypeFilter.classList.remove('hidden');
    }

    // Filter products
    let filtered = products.filter(p => {
        const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;

        const priceMatch = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            const [min, max] = range.split('-').map(Number);
            return p.price >= min && p.price <= max;
        });

        const plantTypeMatch = selectedPlantTypes.length === 0 || 
            selectedPlantTypes.includes(p.plantType) ||
            (selectedCategory === 'Accessories' && p.category === 'Accessories');

        return categoryMatch && priceMatch && plantTypeMatch;
    });

    // Calculate display
    const itemsPerRow = filterSidebarOpen ? 3 : 4;
    const initialDisplayCount = itemsPerRow * 3;
    const displayed = showAllProducts ? filtered : filtered.slice(0, initialDisplayCount);
    const hasMore = filtered.length > initialDisplayCount;

    // Update count
    document.getElementById('productCount').textContent = `${filtered.length} ${filtered.length === 1 ? 'product' : 'products'} found`;

    // Render grid
    const grid = document.getElementById('productsGrid');
    if (filterSidebarOpen) {
        grid.classList.add('with-sidebar');
    } else {
        grid.classList.remove('with-sidebar');
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        document.getElementById('noProducts').classList.remove('hidden');
        document.getElementById('loadMoreSection').classList.add('hidden');
        document.getElementById('showLessSection').classList.add('hidden');
    } else {
        document.getElementById('noProducts').classList.add('hidden');
        
        grid.innerHTML = displayed.map(p => `
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${p.image}" alt="${p.name}" class="product-image">
                    ${p.tag ? `<div class="product-tag ${p.tag.toLowerCase()}">${p.tag}</div>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${p.name}</h3>
                    <div class="product-footer">
                        <div class="product-price-wrapper">
                            <span class="price-label">Price</span>
                            <span class="product-price">$${p.price}</span>
                        </div>
                        <button 
                            class="add-to-cart-btn snipcart-add-item"
                            data-item-id="nokdam-${p.category.toLowerCase()}-${p.id}"
                            data-item-price="${p.price}"
                            data-item-url="/products.json"
                            data-item-name="${p.name}"
                            data-item-description="${p.description}"
                            data-item-image="${p.image}"
                            data-item-categories="${p.category}"
                            data-item-custom1-name="Plant Type"
                            data-item-custom1-value="${p.plantType}"
                            data-item-custom2-name="Tag"
                            data-item-custom2-value="${p.tag || 'Standard'}"
                            data-item-weight="500"
                            data-item-length="20"
                            data-item-width="20"
                            data-item-height="30"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Show/hide load more
        if (hasMore && !showAllProducts) {
            document.getElementById('loadMoreSection').classList.remove('hidden');
            document.getElementById('showLessSection').classList.add('hidden');
        } else if (showAllProducts && filtered.length > initialDisplayCount) {
            document.getElementById('loadMoreSection').classList.add('hidden');
            document.getElementById('showLessSection').classList.remove('hidden');
        } else {
            document.getElementById('loadMoreSection').classList.add('hidden');
            document.getElementById('showLessSection').classList.add('hidden');
        }
    }
}

// Testimonials
function setupTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialDots');

    track.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-card-inner">
                <div class="testimonial-image">
                    <img src="${t.plantImage}" alt="${t.name}'s plant">
                    <div class="testimonial-rating">
                        ${Array(t.rating).fill('<svg width="16" height="16" viewBox="0 0 24 24" fill="#FF6B4A" stroke="#FF6B4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('')}
                    </div>
                </div>
                <div class="testimonial-content">
                    <p class="testimonial-text">"${t.text}"</p>
                    <div class="testimonial-author">
                        <img src="${t.image}" alt="${t.name}" class="author-image">
                        <div>
                            <div class="author-name">${t.name}</div>
                            <div class="author-location">${t.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    dotsContainer.innerHTML = testimonials.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></button>
    `).join('');

    document.getElementById('testimonialPrev').addEventListener('click', prevTestimonial);
    document.getElementById('testimonialNext').addEventListener('click', nextTestimonial);
    document.getElementById('testimonialPrevMobile').addEventListener('click', prevTestimonial);
    document.getElementById('testimonialNextMobile').addEventListener('click', nextTestimonial);

    startTestimonialAutoplay();
}

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    updateTestimonialPosition();
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialPosition();
    resetTestimonialAutoplay();
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialPosition();
    resetTestimonialAutoplay();
}

function updateTestimonialPosition() {
    const track = document.getElementById('testimonialsTrack');
    const viewport = track.parentElement;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const isDesktop = window.innerWidth >= 1024;
    
    // gap 크기 (CSS에서 1.5rem = 24px)
    const gap = 24;
    
    let offset;
    if (isDesktop) {
        // 데스크톱: 3개씩 보임
        // 각 카드 너비 = (viewport width - 2*gap) / 3
        const viewportWidth = viewport.offsetWidth;
        const cardWidth = (viewportWidth - gap * 2) / 3;
        offset = currentTestimonialIndex * (cardWidth + gap);
    } else if (isTablet) {
        // 태블릿: 2개씩 보임
        // 각 카드 너비 = (viewport width - gap) / 2
        const viewportWidth = viewport.offsetWidth;
        const cardWidth = (viewportWidth - gap) / 2;
        offset = currentTestimonialIndex * (cardWidth + gap);
    } else {
        // 모바일: 1개씩 보임, gap 없음
        const viewportWidth = viewport.offsetWidth;
        offset = currentTestimonialIndex * viewportWidth;
    }
    
    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentTestimonialIndex);
    });
}

function startTestimonialAutoplay() {
    testimonialAutoplay = setInterval(nextTestimonial, 5000);
}

function resetTestimonialAutoplay() {
    clearInterval(testimonialAutoplay);
    startTestimonialAutoplay();
}

function updateCartCount() {
    if (typeof window !== 'undefined' && window.Snipcart) {
        setTimeout(() => {
            try {
                const state = window.Snipcart.store.getState();
                const count = state.cart.items.count;
                document.querySelectorAll('.snipcart-items-count').forEach(el => {
                    el.textContent = count;
                    if (count > 0) {
                        el.style.display = 'flex';
                    } else {
                        el.style.display = 'none';
                    }
                });
            } catch (e) {
                console.log('Snipcart not ready yet');
            }
        }, 1000);
    }
}

// FAQ Panel
function openFAQPanel() {
    document.getElementById('faqPanelBackdrop').classList.add('active');
    document.getElementById('faqPanel').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderFAQContent();
}

function closeFAQPanel() {
    document.getElementById('faqPanelBackdrop').classList.remove('active');
    document.getElementById('faqPanel').classList.remove('active');
    document.body.style.overflow = '';
}

function renderFAQContent() {
    const faqData = [
        {
            question: 'How do I care for my new plant?',
            answer: 'Each plant comes with detailed care instructions. Generally, ensure proper lighting, water when the top soil is dry, and maintain appropriate humidity levels. Check our Plant Care section for specific guidance.'
        },
        {
            question: 'Do you offer plant delivery?',
            answer: 'Yes! We offer delivery across the United States. Plants are carefully packaged to ensure they arrive in perfect condition. Shipping costs and delivery times vary by location.'
        },
        {
            question: 'What if my plant arrives damaged?',
            answer: 'We take great care in packaging, but if your plant arrives damaged, please contact us within 48 hours with photos. We\'ll send a replacement or provide a full refund.'
        },
        {
            question: 'How often should I water my plants?',
            answer: 'Watering frequency depends on the plant type, pot size, and environmental conditions. Most indoor plants need water when the top 1-2 inches of soil feel dry. Always check the specific care guide for your plant.'
        },
        {
            question: 'Can I return a plant if it doesn\'t suit my space?',
            answer: 'Yes, we accept returns within 30 days of delivery. The plant must be in its original condition. Please see our Returns policy for full details.'
        },
        {
            question: 'Do you offer plant subscriptions?',
            answer: 'Currently, we don\'t offer subscriptions, but you can sign up for our newsletter to receive exclusive deals and new plant announcements!'
        }
    ];

    const content = document.getElementById('faqContent');
    content.innerHTML = `
        <div style="padding: 1rem 0;">
            ${faqData.map((faq, index) => `
                <div style="border-bottom: 1px solid #e5e7eb; padding: 1.5rem 0;">
                    <button onclick="toggleFAQ(${index})" style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: none; text-align: left; cursor: pointer;">
                        <h4 style="font-weight: 600; color: var(--color-dark-green); font-size: 1rem; margin: 0;">${faq.question}</h4>
                        <svg id="faq-icon-${index}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-left: 1rem; transition: transform 0.3s;"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div id="faq-answer-${index}" style="display: none; padding-top: 1rem; color: #4b5563; line-height: 1.7;">
                        ${faq.answer}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Shipping Panel
function openShippingPanel() {
    document.getElementById('shippingPanelBackdrop').classList.add('active');
    document.getElementById('shippingPanel').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderShippingContent();
}

function closeShippingPanel() {
    document.getElementById('shippingPanelBackdrop').classList.remove('active');
    document.getElementById('shippingPanel').classList.remove('active');
    document.body.style.overflow = '';
}

function renderShippingContent() {
    const content = document.getElementById('shippingContent');
    content.innerHTML = `
        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Shipping Methods</h4>
            
            <div style="margin-bottom: 1.5rem; padding: 1rem; background: var(--color-beige); border-radius: 0.5rem;">
                <h5 style="font-weight: 600; color: var(--color-dark-green); margin-bottom: 0.5rem;">Standard Shipping</h5>
                <p style="color: #4b5563; margin-bottom: 0.25rem;">Delivery Time: 5-7 business days</p>
                <p style="color: #4b5563; margin-bottom: 0.25rem;">Cost: $9.99 (Free for orders over $75)</p>
            </div>

            <div style="margin-bottom: 1.5rem; padding: 1rem; background: var(--color-beige); border-radius: 0.5rem;">
                <h5 style="font-weight: 600; color: var(--color-dark-green); margin-bottom: 0.5rem;">Express Shipping</h5>
                <p style="color: #4b5563; margin-bottom: 0.25rem;">Delivery Time: 2-3 business days</p>
                <p style="color: #4b5563; margin-bottom: 0.25rem;">Cost: $19.99</p>
            </div>

            <div style="margin-bottom: 1.5rem; padding: 1rem; background: var(--color-beige); border-radius: 0.5rem;">
                <h5 style="font-weight: 600; color: var(--color-dark-green); margin-bottom: 0.5rem;">Next Day Delivery</h5>
                <p style="color: #4b5563; margin-bottom: 0.25rem;">Delivery Time: 1 business day</p>
                <p style="color: #4b5563; margin-bottom: 0.25rem;">Cost: $34.99</p>
                <p style="color: #6b7280; font-size: 0.875rem; font-style: italic; margin-top: 0.5rem;">Available for select metro areas only</p>
            </div>
        </div>

        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Plant Packaging</h4>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 1rem;">
                We take special care to ensure your plants arrive healthy and undamaged. All plants are:
            </p>
            <ul style="color: #4b5563; line-height: 1.7; margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Secured in protective packaging with cushioning</li>
                <li>Wrapped to prevent soil spillage</li>
                <li>Shipped in specially designed boxes with air holes</li>
                <li>Protected from extreme temperatures</li>
            </ul>
        </div>

        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Shipping Restrictions</h4>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 0.75rem;">
                Due to agricultural regulations, we cannot ship certain plants to specific states. Restricted states vary by plant type.
            </p>
            <p style="color: #4b5563; line-height: 1.7;">
                If your state has restrictions, you'll be notified during checkout. We apologize for any inconvenience.
            </p>
        </div>

        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Order Tracking</h4>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 0.75rem;">
                Once your order ships, you'll receive a tracking number via email. You can use this number to track your package in real-time.
            </p>
            <p style="color: #4b5563; line-height: 1.7;">
                For any shipping questions, please contact our customer support team.
            </p>
        </div>
    `;
}

// Returns Panel
function openReturnsPanel() {
    document.getElementById('returnsPanelBackdrop').classList.add('active');
    document.getElementById('returnsPanel').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderReturnsContent();
}

function closeReturnsPanel() {
    document.getElementById('returnsPanelBackdrop').classList.remove('active');
    document.getElementById('returnsPanel').classList.remove('active');
    document.body.style.overflow = '';
}

function renderReturnsContent() {
    const content = document.getElementById('returnsContent');
    content.innerHTML = `
        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Return Policy</h4>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 1rem;">
                We want you to love your plants! If for any reason you're not satisfied, we accept returns within <strong>30 days</strong> of delivery.
            </p>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 0.75rem;">
                To be eligible for a return:
            </p>
            <ul style="color: #4b5563; line-height: 1.7; margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Plant must be in its original condition</li>
                <li>Original packaging must be included</li>
                <li>Plant must show no signs of neglect or damage</li>
                <li>Return must be initiated within 30 days of delivery</li>
            </ul>
        </div>

        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">How to Return</h4>
            <div style="color: #4b5563; line-height: 1.7;">
                <p style="margin-bottom: 1rem;"><strong>Step 1:</strong> Contact our customer service team at <a href="mailto:returns@nokdam.com" style="color: var(--color-coral); text-decoration: none;">returns@nokdam.com</a> with your order number and reason for return.</p>
                
                <p style="margin-bottom: 1rem;"><strong>Step 2:</strong> We'll send you a return authorization and shipping label.</p>
                
                <p style="margin-bottom: 1rem;"><strong>Step 3:</strong> Carefully package your plant using the original packaging.</p>
                
                <p><strong>Step 4:</strong> Ship the package back to us using the provided label.</p>
            </div>
        </div>

        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Refund Process</h4>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 0.75rem;">
                Once we receive and inspect your return:
            </p>
            <ul style="color: #4b5563; line-height: 1.7; margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>We'll send you an email confirmation</li>
                <li>Refunds are processed within 5-7 business days</li>
                <li>You'll receive the refund to your original payment method</li>
                <li>Shipping fees are non-refundable (except in cases of our error)</li>
            </ul>
        </div>

        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Damaged or Dead Plants</h4>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 1rem;">
                If your plant arrives damaged or dies within 30 days due to shipping stress:
            </p>
            <ul style="color: #4b5563; line-height: 1.7; margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Contact us within 48 hours of delivery with photos</li>
                <li>We'll send a free replacement or provide a full refund</li>
                <li>No need to return the damaged plant</li>
            </ul>
            <p style="color: #4b5563; line-height: 1.7;">
                Your satisfaction is our priority. We're here to help!
            </p>
        </div>

        <div class="order-info-box">
            <h4 style="color: var(--color-dark-green); font-size: 1.125rem; margin-bottom: 1rem;">Exchanges</h4>
            <p style="color: #4b5563; line-height: 1.7; margin-bottom: 0.75rem;">
                We currently don't offer direct exchanges. If you'd like a different plant:
            </p>
            <ol style="color: #4b5563; line-height: 1.7; margin-left: 1.5rem;">
                <li>Return your current plant following our return process</li>
                <li>Place a new order for your desired plant</li>
                <li>Once your return is processed, you'll receive your refund</li>
            </ol>
        </div>
    `;
}

// Window resize handler
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024 && !filterSidebarOpen) {
        filterSidebarOpen = true;
        document.getElementById('filtersSidebar').classList.add('active');
        document.getElementById('filterToggleText').textContent = 'Hide Filters';
        renderProducts();
    }
    
    // 리사이즈 시 캐러셀 위치 재조정
    updateTestimonialPosition();
});
