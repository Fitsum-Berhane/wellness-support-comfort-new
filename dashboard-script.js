// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Specialty data with conditions
    const specialtyData = {
        'Skin & Complexion': ['Acne', 'Hyperpigmentation', 'Rosacea', 'Eczema', 'Anti-aging', 'Sensitive Skin'],
        'Sleep & Restoration': ['Insomnia', 'Sleep Apnea', 'Restless Sleep', 'Sleep Schedule', 'Stress-related Sleep Issues'],
        'Hair & Scalp Health': ['Hair Loss', 'Dandruff', 'Scalp Irritation', 'Thinning Hair', 'Hair Growth'],
        'Nutrition & Digestive Wellness': ['Weight Management', 'Digestive Issues', 'Food Sensitivities', 'Gut Health', 'Nutritional Deficiencies'],
        'Fitness & Movement': ['Strength Training', 'Cardio Health', 'Flexibility', 'Injury Prevention', 'Exercise Motivation'],
        'Mental & Emotional Well‑being': ['Anxiety', 'Depression', 'Stress Management', 'Self-confidence', 'Emotional Balance'],
        'Hormonal & Reproductive Health': ['Hormonal Imbalance', 'Menstrual Issues', 'Fertility', 'Menopause', 'PCOS'],
        'Immunity & Energy': ['Low Energy', 'Frequent Illness', 'Immune Support', 'Chronic Fatigue', 'Seasonal Health'],
        'Oral Health': ['Gum Disease', 'Tooth Sensitivity', 'Bad Breath', 'Teeth Whitening', 'Oral Hygiene'],
        'Aging & Longevity': ['Healthy Aging', 'Cognitive Health', 'Joint Health', 'Preventive Care', 'Vitality']
    };

    // Sample content data
    const sampleContent = {
        'Acne': {
            detailed: `
                <div class="detailed-content">
                    <h4>Understanding Acne: A Comprehensive Guide</h4>
                    <p>Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It affects people of all ages but is most common during teenage years due to hormonal changes.</p>
                    
                    <h4>Types of Acne</h4>
                    <ul>
                        <li><strong>Blackheads:</strong> Open comedones with a dark appearance</li>
                        <li><strong>Whiteheads:</strong> Closed comedones that appear as small white bumps</li>
                        <li><strong>Papules:</strong> Small red, inflamed bumps</li>
                        <li><strong>Pustules:</strong> Pimples containing pus</li>
                        <li><strong>Cysts:</strong> Deep, painful lumps under the skin</li>
                    </ul>
                    
                    <h4>Common Causes</h4>
                    <p>Several factors contribute to acne development including hormonal fluctuations, genetics, certain medications, diet, and stress. Understanding your specific triggers is key to effective treatment.</p>
                    
                    <h4>Treatment Approaches</h4>
                    <p>Effective acne treatment often involves a combination of proper skincare, lifestyle modifications, and when necessary, professional treatments. Our practitioners can help you develop a personalized approach.</p>
                </div>
            `,
            videos: [
                { title: 'Understanding Acne Types', duration: '8:45' },
                { title: 'Daily Skincare Routine for Acne', duration: '12:30' },
                { title: 'Hormonal Acne Explained', duration: '15:20' },
                { title: 'Acne Myths vs Facts', duration: '10:15' }
            ],
            productVideos: [
                { title: 'Best Cleansers for Acne-Prone Skin', duration: '14:22' },
                { title: 'Retinoid Products: What You Need to Know', duration: '11:45' },
                { title: 'Spot Treatment Options Reviewed', duration: '9:30' },
                { title: 'Moisturizers That Won\'t Clog Pores', duration: '13:15' }
            ],
            products: [
                { name: 'CeraVe Foaming Facial Cleanser', description: 'Gentle, non-comedogenic cleanser for daily use', price: '$12.99' },
                { name: 'The Ordinary Niacinamide 10%', description: 'Reduces appearance of blemishes and congestion', price: '$7.20' },
                { name: 'La Roche-Posay Effaclar Duo', description: 'Dual-action acne treatment with benzoyl peroxide', price: '$29.99' },
                { name: 'Neutrogena Oil-Free Moisturizer', description: 'Lightweight, non-comedogenic daily moisturizer', price: '$8.97' },
                { name: 'Paula\'s Choice 2% BHA Liquid', description: 'Salicylic acid exfoliant for unclogging pores', price: '$32.00' },
                { name: 'EltaMD UV Clear Sunscreen', description: 'Broad-spectrum SPF 46 for sensitive, acne-prone skin', price: '$37.00' }
            ]
        }
    };

    // Initialize specialty tabs
    function initializeSpecialtyTabs() {
        const tabsContainer = document.getElementById('specialty-tabs');
        const specialties = Object.keys(specialtyData);
        
        specialties.forEach(specialty => {
            const tab = document.createElement('button');
            tab.className = 'specialty-tab';
            tab.textContent = specialty;
            tab.addEventListener('click', () => selectSpecialty(specialty));
            tabsContainer.appendChild(tab);
        });
    }

    // Handle specialty selection
    function selectSpecialty(specialty) {
        // Update active tab
        document.querySelectorAll('.specialty-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.textContent === specialty) {
                tab.classList.add('active');
            }
        });

        // Show condition section
        const conditionSection = document.getElementById('condition-section');
        const conditionSelect = document.getElementById('condition-select');
        
        // Clear and populate conditions
        conditionSelect.innerHTML = '<option value="">Choose a condition to explore...</option>';
        specialtyData[specialty].forEach(condition => {
            const option = document.createElement('option');
            option.value = condition;
            option.textContent = condition;
            conditionSelect.appendChild(option);
        });

        conditionSection.style.display = 'block';
        
        // Hide content navigation and reset content
        document.getElementById('content-navigation').style.display = 'none';
        resetContentArea();
    }

    // Handle condition selection
    document.getElementById('condition-select').addEventListener('change', function() {
        const selectedCondition = this.value;
        if (selectedCondition) {
            document.getElementById('content-navigation').style.display = 'block';
            loadContent('detailed', selectedCondition);
        } else {
            document.getElementById('content-navigation').style.display = 'none';
            resetContentArea();
        }
    });

    // Handle content navigation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-pill') || e.target.closest('.nav-pill')) {
            const pill = e.target.classList.contains('nav-pill') ? e.target : e.target.closest('.nav-pill');
            const contentType = pill.getAttribute('data-content');
            const selectedCondition = document.getElementById('condition-select').value;
            
            // Update active pill
            document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            loadContent(contentType, selectedCondition);
        }
    });

    // Load content based on type and condition
    function loadContent(contentType, condition) {
        const contentArea = document.getElementById('content-area');
        const data = sampleContent[condition] || sampleContent['Acne']; // Fallback to Acne data
        
        switch(contentType) {
            case 'detailed':
                contentArea.innerHTML = data.detailed;
                break;
            case 'video':
                contentArea.innerHTML = createVideoGrid(data.videos, 'Condition Videos');
                break;
            case 'product-videos':
                contentArea.innerHTML = createVideoGrid(data.productVideos, 'Product Videos');
                break;
            case 'products':
                contentArea.innerHTML = createProductGrid(data.products);
                break;
        }
    }

    // Create video grid HTML
    function createVideoGrid(videos, title) {
        let html = `<h3>${title}</h3><div class="video-grid">`;
        videos.forEach(video => {
            html += `
                <div class="video-card">
                    <div class="video-thumbnail">▶️</div>
                    <div class="video-info">
                        <div class="video-title">${video.title}</div>
                        <div class="video-duration">${video.duration}</div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    // Create product grid HTML
    function createProductGrid(products) {
        let html = '<h3>Recommended Products</h3><div class="product-grid">';
        products.forEach(product => {
            html += `
                <div class="product-card">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">${product.price}</div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    // Reset content area
    function resetContentArea() {
        document.getElementById('content-area').innerHTML = `
            <div class="welcome-message">
                <h3>🌟 Welcome to Your Wellness Explorer</h3>
                <p>Select a specialty above to begin exploring conditions and treatments tailored to your wellness journey.</p>
            </div>
        `;
    }

    // Load sample product recommendations
    function loadProductRecommendations() {
        const aiProducts = document.getElementById('ai-products');
        const practitionerProducts = document.getElementById('practitioner-products');
        
        const aiRecommendations = [
            { name: 'Vitamin C Serum', description: 'Brightening antioxidant serum', reason: 'Based on your skin goals' },
            { name: 'Hyaluronic Acid Moisturizer', description: 'Intensive hydration for all skin types', reason: 'Matches your skin type' },
            { name: 'Gentle Exfoliating Cleanser', description: 'Daily cleanser with mild AHA', reason: 'Supports your routine' }
        ];

        const practitionerRecommendations = [
            { name: 'Retinol Night Treatment', description: 'Professional-grade anti-aging formula', reason: 'Dr. Chen recommends for your goals' },
            { name: 'Mineral Sunscreen SPF 50', description: 'Zinc oxide broad-spectrum protection', reason: 'Essential for your skin health plan' },
            { name: 'Probiotic Supplement', description: 'Gut health support for clear skin', reason: 'Dr. Rodriguez suggests for overall wellness' }
        ];

        aiProducts.innerHTML = createProductList(aiRecommendations);
        practitionerProducts.innerHTML = createProductList(practitionerRecommendations);
    }

    // Create product list HTML
    function createProductList(products) {
        let html = '';
        products.forEach(product => {
            html += `
                <div class="product-item">
                    <div class="product-image" style="background: linear-gradient(135deg, #f48fb1, #f06292); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">📦</div>
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <div class="product-reason">${product.reason}</div>
                    </div>
                </div>
            `;
        });
        return html;
    }

    // Initialize dashboard
    initializeSpecialtyTabs();
    loadProductRecommendations();
});