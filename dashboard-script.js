// Dashboard-specific JavaScript functionality

// Dashboard Specialties Data (updated from requirements)
const dashboardSpecialties = [
    "Skin & Complexion",
    "Sleep & Restoration", 
    "Hair & Scalp Health",
    "Nutrition & Digestive Wellness",
    "Fitness & Movement",
    "Mental & Emotional Well‑being",
    "Hormonal & Reproductive Health",
    "Immunity & Energy",
    "Oral Health",
    "Aging & Longevity"
];

// Sample content data for each specialty
const contentData = {
    subspecialties: [
        { title: "Acne Treatment", type: "Subspecialty", description: "Comprehensive acne management strategies" },
        { title: "Anti-Aging Skincare", type: "Subspecialty", description: "Evidence-based anti-aging approaches" },
        { title: "Sleep Hygiene", type: "Subspecialty", description: "Optimize your sleep environment and habits" },
        { title: "Stress Management", type: "Subspecialty", description: "Techniques for managing daily stress" }
    ],
    conditionVideos: [
        { title: "Understanding Hormonal Acne", type: "Condition Video", description: "15-minute expert explanation", duration: "15:30" },
        { title: "Managing Insomnia Naturally", type: "Condition Video", description: "Sleep specialist guidance", duration: "12:45" },
        { title: "Nutrition for Glowing Skin", type: "Condition Video", description: "Dermatologist-approved diet tips", duration: "18:20" }
    ],
    productVideos: [
        { title: "Best Moisturizers for Sensitive Skin", type: "Product Video", description: "Dermatologist recommendations", duration: "10:15" },
        { title: "Sleep Supplements That Actually Work", type: "Product Video", description: "Evidence-based supplement guide", duration: "14:30" },
        { title: "Natural Hair Care Products Review", type: "Product Video", description: "Professional hair stylist insights", duration: "16:45" }
    ]
};

// AI Product Recommendations
const aiProducts = [
    {
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057114516_fbc5c7d5.webp",
        title: "Gentle Hydrating Cleanser",
        description: "pH-balanced cleanser for sensitive skin",
        reason: "Based on your skin sensitivity profile"
    },
    {
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057116378_f13dc917.webp",
        title: "Magnesium Sleep Support",
        description: "Natural sleep aid supplement",
        reason: "Matches your sleep improvement goals"
    },
    {
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057118539_be0b7b9b.webp",
        title: "Vitamin C Serum",
        description: "Brightening antioxidant serum",
        reason: "Recommended for your skincare routine"
    }
];

// Practitioner Product Recommendations
const practitionerProducts = [
    {
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057120450_fbf83e5e.webp",
        title: "Probiotic Complex",
        description: "Gut health support supplement",
        reason: "Dr. Maria Rodriguez recommends for digestive wellness",
        practitioner: "Dr. Maria Rodriguez"
    },
    {
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057122167_fc532e43.webp",
        title: "Retinol Night Treatment",
        description: "Professional-grade retinol serum",
        reason: "Dr. Sarah Chen's top pick for anti-aging",
        practitioner: "Dr. Sarah Chen"
    }
];

// Initialize Dashboard
function initializeDashboard() {
    loadSpecialtyTabs();
    loadAllContent();
    loadProductRecommendations();
    setupFilterButtons();
    setupSpecialtyTabs();
}

// Load Specialty Tabs
function loadSpecialtyTabs() {
    const tabsContainer = document.getElementById('specialty-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = dashboardSpecialties.map((specialty, index) => `
        <button class="specialty-tab ${index === 0 ? 'active' : ''}" data-specialty="${specialty}">
            ${specialty}
        </button>
    `).join('');
}

// Load Content Based on Filter
function loadContent(filter = 'all', specialty = null) {
    const contentGrid = document.getElementById('content-grid');
    if (!contentGrid) return;

    let content = [];
    
    if (filter === 'all' || filter === 'subspecialties') {
        content = content.concat(contentData.subspecialties);
    }
    if (filter === 'all' || filter === 'condition-videos') {
        content = content.concat(contentData.conditionVideos);
    }
    if (filter === 'all' || filter === 'product-videos') {
        content = content.concat(contentData.productVideos);
    }

    contentGrid.innerHTML = content.map(item => `
        <div class="content-item">
            <div class="content-type">${item.type}</div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            ${item.duration ? `<small>Duration: ${item.duration}</small>` : ''}
            <button class="btn-primary btn-small">View Content</button>
        </div>
    `).join('');
}

// Load All Content Initially
function loadAllContent() {
    loadContent('all');
}

// Load Product Recommendations
function loadProductRecommendations() {
    // Load AI Products
    const aiContainer = document.getElementById('ai-products');
    if (aiContainer) {
        aiContainer.innerHTML = aiProducts.map(product => `
            <div class="product-item">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h4>${product.title}</h4>
                    <p>${product.description}</p>
                    <div class="product-reason">${product.reason}</div>
                </div>
            </div>
        `).join('');
    }

    // Load Practitioner Products
    const practitionerContainer = document.getElementById('practitioner-products');
    if (practitionerContainer) {
        practitionerContainer.innerHTML = practitionerProducts.map(product => `
            <div class="product-item">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h4>${product.title}</h4>
                    <p>${product.description}</p>
                    <div class="product-reason">${product.reason}</div>
                </div>
            </div>
        `).join('');
    }
}

// Setup Filter Buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Load content based on filter
            const filter = button.dataset.filter;
            loadContent(filter);
        });
    });
}

// Setup Specialty Tabs
function setupSpecialtyTabs() {
    const specialtyTabs = document.querySelectorAll('.specialty-tab');
    specialtyTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            specialtyTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // For now, just reload all content (could be filtered by specialty in the future)
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            loadContent(activeFilter, tab.dataset.specialty);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});