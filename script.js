// Wellness Categories Data
const wellnessCategories = [
    {
        name: "Skin & Complexion",
        description: "Manage acne, hyperpigmentation, wrinkles, and other skin concerns with expert guidance.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057114516_fbc5c7d5.webp"
    },
    {
        name: "Hair & Scalp Health",
        description: "Address issues like hair loss, dryness, dandruff, and scalp irritation naturally.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057116378_f13dc917.webp"
    },
    {
        name: "Body Image & Weight Management",
        description: "Cultivate body confidence and maintain a healthy weight with holistic strategies.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057118539_be0b7b9b.webp"
    },
    {
        name: "Dental & Oral Care",
        description: "Improve your smile with guidance on teeth whitening, bad breath, and gum health.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057120450_fbf83e5e.webp"
    },
    {
        name: "Nutrition & Diet",
        description: "Understand how what you eat affects how you feel, look, and age.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057122167_fc532e43.webp"
    },
    {
        name: "Sleep & Restoration",
        description: "Optimize your sleep cycle and energy through lifestyle and self-care habits.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057114516_fbc5c7d5.webp"
    },
    {
        name: "Eye Area Appearance",
        description: "Reduce puffiness, dark circles, and signs of fatigue around the eyes.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057116378_f13dc917.webp"
    },
    {
        name: "Nail & Hand Appearance",
        description: "Care for brittle nails, dry hands, and nail bed health with simple habits.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057118539_be0b7b9b.webp"
    },
    {
        name: "Reproductive & Intimate Health",
        description: "Navigate hormonal changes, vaginal health, and reproductive wellbeing with compassion.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057120450_fbf83e5e.webp"
    },
    {
        name: "Posture & Physical Fitness",
        description: "Build strength, improve alignment, and move confidently with expert help.",
        image: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057122167_fc532e43.webp"
    }
];

// Practitioners Data - Enhanced with more practitioners
const practitioners = [
    {
        name: "Dr. Sarah Chen",
        specialty: "Dermatologist",
        photo: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057088355_0ae89d80.webp",
        wisdom: "Remember, healthy skin is a journey, not a destination. Small, consistent steps make the biggest difference in how you feel about yourself."
    },
    {
        name: "Dr. Maria Rodriguez",
        specialty: "Nutritionist",
        photo: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057090248_2811e56e.webp",
        wisdom: "Your relationship with food should nourish both your body and your spirit. Listen to what makes you feel truly energized and confident."
    },
    {
        name: "Dr. Jennifer Walsh",
        specialty: "Mental Health Counselor",
        photo: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057092117_defc50ee.webp",
        wisdom: "Self-compassion is the foundation of lasting change. Treat yourself with the same kindness you'd show a dear friend."
    },
    {
        name: "Dr. Michael Thompson",
        specialty: "Sleep Specialist",
        photo: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057088355_0ae89d80.webp",
        wisdom: "Quality sleep isn't a luxury—it's the foundation of feeling confident and energized in your own skin every day."
    },
    {
        name: "Dr. Aisha Patel",
        specialty: "Wellness Coach",
        photo: "https://d64gsuwffb70l.cloudfront.net/68ba900b1c8f8ce379ca4381_1757057090248_2811e56e.webp",
        wisdom: "True wellness comes from within. When you honor your body's needs, confidence naturally follows."
    }
];

// Testimonials Data
const testimonials = [
    {
        quote: "ReframeYou helped me understand that my worth isn't defined by my appearance.",
        author: "Emma K."
    },
    {
        quote: "The practitioners here actually listen and provide real, actionable guidance.",
        author: "Michael R."
    },
    {
        quote: "I finally found a safe space to discuss my insecurities without judgment.",
        author: "Sophia L."
    },
    {
        quote: "The personalized approach made all the difference in my wellness journey.",
        author: "David M."
    },
    {
        quote: "I learned to love myself while still working towards my goals.",
        author: "Aisha P."
    }
];

// Utility function to get random items from array
function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display random categories on homepage
function displayRandomCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    if (!categoriesGrid) return;

    const randomCategories = getRandomItems(wellnessCategories, 3);
    
    categoriesGrid.innerHTML = randomCategories.map(category => `
        <div class="category-card">
            <img src="${category.image}" alt="${category.name}">
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <button class="btn-primary">Learn More</button>
        </div>
    `).join('');
}

// Display random practitioner spotlight
function displayPractitionerSpotlight() {
    const spotlightElement = document.getElementById('practitioner-spotlight');
    if (!spotlightElement) return;

    const randomPractitioner = practitioners[Math.floor(Math.random() * practitioners.length)];
    
    spotlightElement.innerHTML = `
        <img src="${randomPractitioner.photo}" alt="${randomPractitioner.name}" class="practitioner-photo">
        <div class="practitioner-name">${randomPractitioner.name}</div>
        <div class="practitioner-specialty">${randomPractitioner.specialty}</div>
        <div class="practitioner-wisdom">"${randomPractitioner.wisdom}"</div>
    `;
}

// Display random testimonial
function displayRandomTestimonial() {
    const testimonialElement = document.getElementById('testimonial-display');
    if (!testimonialElement) return;

    const randomTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
    
    testimonialElement.innerHTML = `
        <div class="testimonial-quote">"${randomTestimonial.quote}"</div>
        <div class="testimonial-author">— ${randomTestimonial.author}</div>
    `;
}

// FAQ Toggle Functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayRandomCategories();
    displayPractitionerSpotlight();
    displayRandomTestimonial();
    initializeFAQ();
    initializeSmoothScrolling();
    
    // Add loading animation class removal
    document.body.classList.add('loaded');
});

// Add some entrance animations
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.category-card, .practitioner-card, .testimonial-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});