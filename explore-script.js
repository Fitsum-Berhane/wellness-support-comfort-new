// Explore page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Specialty data with conditions - including all wellness categories
    const specialtyData = {
        'Skin & Complexion': ['Acne', 'Hyperpigmentation', 'Rosacea', 'Eczema', 'Anti-aging', 'Sensitive Skin'],
        'Hair & Scalp Health': ['Hair Loss', 'Dandruff', 'Scalp Irritation', 'Thinning Hair', 'Hair Growth'],
        'Body Image & Weight Management': ['Weight Loss', 'Body Confidence', 'Muscle Building', 'Healthy Weight Gain', 'Body Dysmorphia'],
        'Dental & Oral Care': ['Gum Disease', 'Tooth Sensitivity', 'Bad Breath', 'Teeth Whitening', 'Oral Hygiene'],
        'Nutrition & Diet': ['Weight Management', 'Digestive Issues', 'Food Sensitivities', 'Gut Health', 'Nutritional Deficiencies'],
        'Sleep & Restoration': ['Insomnia', 'Sleep Apnea', 'Restless Sleep', 'Sleep Schedule', 'Stress-related Sleep Issues'],
        'Eye Area Appearance': ['Dark Circles', 'Puffy Eyes', 'Fine Lines', 'Eye Bags', 'Crow\'s Feet'],
        'Nail & Hand Appearance': ['Brittle Nails', 'Nail Growth', 'Hand Dryness', 'Cuticle Care', 'Nail Health'],
        'Reproductive & Intimate Health': ['Hormonal Imbalance', 'Menstrual Issues', 'Fertility', 'Menopause', 'PCOS'],
        'Posture & Physical Fitness': ['Poor Posture', 'Back Pain', 'Core Strength', 'Flexibility', 'Exercise Motivation'],
        'Mental & Emotional Well‑being': ['Anxiety', 'Depression', 'Stress Management', 'Self-confidence', 'Emotional Balance'],
        'Immunity & Energy': ['Low Energy', 'Frequent Illness', 'Immune Support', 'Chronic Fatigue', 'Seasonal Health']
    };

    // Educational content for explore page
    const educationalContent = {
        'Acne': {
            detailed: `
                <div class="detailed-content">
                    <h4>Understanding Acne: Educational Overview</h4>
                    <p>Acne is one of the most common skin conditions, affecting millions of people worldwide. It occurs when hair follicles become clogged with oil (sebum) and dead skin cells, leading to various types of blemishes.</p>
                    
                    <h4>What Causes Acne?</h4>
                    <ul>
                        <li><strong>Hormonal Changes:</strong> Particularly during puberty, menstruation, and pregnancy</li>
                        <li><strong>Genetics:</strong> Family history plays a significant role</li>
                        <li><strong>Certain Products:</strong> Heavy cosmetics or hair products can clog pores</li>
                        <li><strong>Stress:</strong> Can worsen existing acne conditions</li>
                        <li><strong>Diet:</strong> Some studies suggest dairy and high-glycemic foods may contribute</li>
                    </ul>
                    
                    <h4>Prevention and Management</h4>
                    <p>While acne cannot always be prevented, proper skincare habits can help manage and reduce breakouts. This includes gentle cleansing, avoiding harsh scrubbing, and using non-comedogenic products.</p>
                    
                    <h4>When to Seek Professional Help</h4>
                    <p>Consider consulting a dermatologist if acne is severe, leaving scars, or significantly impacting your quality of life. Professional treatments can provide more effective solutions than over-the-counter options.</p>
                </div>
            `,
            videos: [
                { title: 'Acne 101: Understanding the Basics', duration: '12:45' },
                { title: 'Skincare Routine for Acne-Prone Skin', duration: '15:30' },
                { title: 'Hormonal Acne: What You Need to Know', duration: '18:20' },
                { title: 'Acne Myths Debunked by Dermatologists', duration: '10:50' }
            ]
        }
    };

    // Initialize specialty pills
    function initializeSpecialtyPills() {
        const pillsContainer = document.getElementById('specialty-pills');
        const specialties = Object.keys(specialtyData);
        
        specialties.forEach(specialty => {
            const pill = document.createElement('button');
            pill.className = 'specialty-pill';
            pill.textContent = specialty;
            pill.addEventListener('click', () => selectSpecialty(specialty));
            pillsContainer.appendChild(pill);
        });
    }

    // Initialize categories grid with all wellness categories
    function initializeCategoriesGrid() {
        const categoriesGrid = document.getElementById('categories-grid');
        const specialties = Object.keys(specialtyData);
        
        specialties.forEach(specialty => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.innerHTML = `
                <div class="category-icon">🌟</div>
                <h3>${specialty}</h3>
                <p>Explore ${specialty.toLowerCase()} conditions and treatments</p>
            `;
            categoryCard.addEventListener('click', () => selectSpecialty(specialty));
            categoriesGrid.appendChild(categoryCard);
        });
    }

    // Handle specialty selection
    function selectSpecialty(specialty) {
        // Update active pill
        document.querySelectorAll('.specialty-pill').forEach(pill => {
            pill.classList.remove('active');
            if (pill.textContent === specialty) {
                pill.classList.add('active');
            }
        });

        // Show condition selection
        const conditionSelection = document.getElementById('condition-selection');
        const conditionSelect = document.getElementById('explore-condition-select');
        
        // Clear and populate conditions
        conditionSelect.innerHTML = '<option value="">Select a condition to learn more...</option>';
        specialtyData[specialty].forEach(condition => {
            const option = document.createElement('option');
            option.value = condition;
            option.textContent = condition;
            conditionSelect.appendChild(option);
        });

        conditionSelection.style.display = 'block';
        
        // Hide content navigation and reset content
        document.getElementById('explore-content-nav').style.display = 'none';
        resetExploreContent();
    }

    // Handle condition selection
    document.getElementById('explore-condition-select').addEventListener('change', function() {
        const selectedCondition = this.value;
        if (selectedCondition) {
            document.getElementById('explore-content-nav').style.display = 'flex';
            loadExploreContent('detailed', selectedCondition);
        } else {
            document.getElementById('explore-content-nav').style.display = 'none';
            resetExploreContent();
        }
    });

    // Handle content navigation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('explore-nav-btn') || e.target.closest('.explore-nav-btn')) {
            const btn = e.target.classList.contains('explore-nav-btn') ? e.target : e.target.closest('.explore-nav-btn');
            const contentType = btn.getAttribute('data-content');
            const selectedCondition = document.getElementById('explore-condition-select').value;
            
            // Update active button
            document.querySelectorAll('.explore-nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            loadExploreContent(contentType, selectedCondition);
        }
    });

    // Load educational content
    function loadExploreContent(contentType, condition) {
        const contentDisplay = document.getElementById('explore-content-display');
        const data = educationalContent[condition] || educationalContent['Acne']; // Fallback to Acne data
        
        switch(contentType) {
            case 'detailed':
                contentDisplay.innerHTML = data.detailed;
                break;
            case 'video':
                contentDisplay.innerHTML = createExploreVideoGrid(data.videos, 'Educational Videos');
                break;
        }
    }

    // Create video grid for explore page
    function createExploreVideoGrid(videos, title) {
        let html = `<h3>${title}</h3><div class="video-grid">`;
        videos.forEach(video => {
            html += `
                <div class="video-card">
                    <div class="video-thumbnail">🎓</div>
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

    // Reset explore content area
    function resetExploreContent() {
        document.getElementById('explore-content-display').innerHTML = `
            <div class="explore-welcome">
                <h3>✨ Start Your Exploration</h3>
                <p>Select a wellness specialty above to discover conditions and educational content curated by our expert practitioners.</p>
            </div>
        `;
    }

    // Initialize explore page
    initializeSpecialtyPills();
    initializeCategoriesGrid();
});