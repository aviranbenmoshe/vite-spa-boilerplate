// Language data structure
const languageData = {
    en: {
        // Navigation
        home: "Home",
        products: "Products",
        services: "Services",
        about: "About",
        contact: "Contact",
        
        // Hero section
        heroTitle: "Enhance Your Natural Beauty",
        heroSubtitle: "Professional cosmetic services and premium beauty products crafted with care",
        bookConsultation: "Book Consultation",
        viewProducts: "View Products",
        heroImageText: "Premium Beauty Products",
        
        // Products section
        productsTitle: "Our Products",
        productsSubtitle: "Carefully curated cosmetics for every skin type",
        productFoundation: "Premium Foundation",
        productFoundationDesc: "Full coverage foundation for all-day wear",
        productLipstick: "Luxury Lipstick",
        productLipstickDesc: "Long-lasting, vibrant color collection",
        productEyeshadow: "Eyeshadow Palette",
        productEyeshadowDesc: "12 versatile shades for any occasion",
        productSkincare: "Skincare Set",
        productSkincareDesc: "Complete routine for healthy skin",
        
        // Services section
        servicesTitle: "Professional Services",
        servicesSubtitle: "Expert beauty treatments tailored to you",
        serviceMakeup: "Makeup Application",
        serviceMakeupDesc: "Professional makeup for special events, weddings, and photoshoots",
        serviceConsultation: "Beauty Consultation",
        serviceConsultationDesc: "Personalized beauty advice and product recommendations",
        serviceSkincare: "Skincare Treatment",
        serviceSkincareDesc: "Professional facial treatments for healthy, glowing skin",
        
        // About section
        aboutTitle: "About Gila",
        aboutDescription: "With over 10 years of experience in the beauty industry, Gila brings passion and expertise to every client. Specializing in enhancing natural beauty through professional makeup application and personalized skincare solutions.",
        statClients: "Happy Clients",
        statExperience: "Years Experience",
        statProducts: "Premium Products",
        aboutImageText: "Professional Cosmetician",
        
        // Contact section
        contactTitle: "Get in Touch",
        contactSubtitle: "Ready to enhance your natural beauty?",
        contactAddress: "123 Beauty Lane, City, State 12345",
        contactPhone: "(555) 123-4567",
        contactEmail: "hello@gilacosmetics.com",
        formNamePlaceholder: "Your Name",
        formEmailPlaceholder: "Your Email",
        formServicePlaceholder: "Select Service",
        formMessagePlaceholder: "Your Message",
        sendMessage: "Send Message",
        selectServiceOption: "Select Service",
        makeupOption: "Makeup Application",
        consultationOption: "Beauty Consultation",
        skincareOption: "Skincare Treatment",
        
        // Footer
        footerCopyright: "© 2024 Gila Cosmetics. All rights reserved.",
        
        // Form validation messages
        fillAllFields: "Please fill in all fields",
        invalidEmail: "Please enter a valid email address",
        messageSent: "Thank you! Your message has been sent successfully."
    },
    he: {
        // Navigation
        home: "בית",
        products: "מוצרים",
        services: "שירותים",
        about: "אודות",
        contact: "צור קשר",
        
        // Hero section
        heroTitle: "הדגישי את היופי הטבעי שלך",
        heroSubtitle: "שירותי קוסמטיקה מקצועיים ומוצרי יופי איכותיים שנוצרו בקפידה",
        bookConsultation: "הזמני ייעוץ",
        viewProducts: "צפי במוצרים",
        heroImageText: "מוצרי יופי איכותיים",
        
        // Products section
        productsTitle: "המוצרים שלנו",
        productsSubtitle: "קוסמטיקה נבחרת בקפידה לכל סוג עור",
        productFoundation: "בסיס איכותי",
        productFoundationDesc: "כיסוי מלא לעמידות כל היום",
        productLipstick: "שפתון יוקרתי",
        productLipstickDesc: "קולקציית צבעים עמידה וחיה",
        productEyeshadow: "פלטת צלליות",
        productEyeshadowDesc: "12 גוונים רב-תכליתיים לכל אירוע",
        productSkincare: "סט טיפוח",
        productSkincareDesc: "שגרת טיפוח שלמה לעור בריא",
        
        // Services section
        servicesTitle: "שירותים מקצועיים",
        servicesSubtitle: "טיפולי יופי מומחים המותאמים אישית עבורך",
        serviceMakeup: "איפור מקצועי",
        serviceMakeupDesc: "איפור מקצועי לאירועים מיוחדים, חתונות וצילומים",
        serviceConsultation: "ייעוץ יופי",
        serviceConsultationDesc: "ייעוץ יופי אישי והמלצות על מוצרים",
        serviceSkincare: "טיפולי פנים",
        serviceSkincareDesc: "טיפולי פנים מקצועיים לעור בריא וזוהר",
        
        // About section
        aboutTitle: "אודות גילה",
        aboutDescription: "עם למעלה מ-10 שנות ניסיון בתעשיית היופי, גילה מביאה תשוקה ומומחיות לכל לקוחה. מתמחה בהדגשת יופי טבעי באמצעות איפור מקצועי ופתרונות טיפוח אישיים.",
        statClients: "לקוחות מרוצות",
        statExperience: "שנות ניסיון",
        statProducts: "מוצרים איכותיים",
        aboutImageText: "קוסמטיקאית מקצועית",
        
        // Contact section
        contactTitle: "צרי קשר",
        contactSubtitle: "מוכנה להדגיש את היופי הטבעי שלך?",
        contactAddress: "רחוב היופי 123, עיר, מדינה 12345",
        contactPhone: "(555) 123-4567",
        contactEmail: "hello@gilacosmetics.com",
        formNamePlaceholder: "השם שלך",
        formEmailPlaceholder: "האימייל שלך",
        formServicePlaceholder: "בחרי שירות",
        formMessagePlaceholder: "ההודעה שלך",
        sendMessage: "שלחי הודעה",
        selectServiceOption: "בחרי שירות",
        makeupOption: "איפור מקצועי",
        consultationOption: "ייעוץ יופי",
        skincareOption: "טיפולי פנים",
        
        // Footer
        footerCopyright: "© 2024 גילה קוסמטיקס. כל הזכויות שמורות.",
        
        // Form validation messages
        fillAllFields: "אנא מלאי את כל השדות",
        invalidEmail: "אנא הכניסי כתובת אימייל תקינה",
        messageSent: "תודה! הודעתך נשלחה בהצלחה."
    }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    initLanguageSystem();
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Active Navigation Link
    const sections = document.querySelectorAll('.section');
    const updateActiveNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .service-card, .about-content, .section-header');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;

            // Basic validation
            if (!name || !email || !service || !message) {
                showNotification(languageData[currentLanguage].fillAllFields, 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification(languageData[currentLanguage].invalidEmail, 'error');
                return;
            }

            // Simulate form submission
            showNotification(languageData[currentLanguage].messageSent, 'success');
            this.reset();
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 24px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#007aff'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            font-size: 14px;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Product Card Interactions
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service Card Interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Button Click Effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-link.active {
            color: var(--accent-color);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
        
        body.menu-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Counter animation for stats
    const statsNumbers = document.querySelectorAll('.stat-number');
    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent.replace(/\D/g, ''));
                const suffix = target.textContent.replace(/\d/g, '');
                
                let current = 0;
                const increment = finalNumber / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        current = finalNumber;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(current) + suffix;
                }, 30);
                
                observer.unobserve(target);
            }
        });
    };

    const statsObserver = new IntersectionObserver(animateCounters, {
        threshold: 0.5
    });

    statsNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Lazy loading simulation for images
    const imageElements = document.querySelectorAll('.image-placeholder');
    imageElements.forEach(element => {
        element.style.background = `linear-gradient(135deg, 
            var(--pink-accent) 0%, 
            var(--gold-accent) 50%, 
            var(--pink-accent) 100%)`;
        element.style.backgroundSize = '200% 200%';
        element.style.animation = 'gradientShift 3s ease-in-out infinite';
    });

    // Add gradient animation CSS
    const gradientStyle = document.createElement('style');
    gradientStyle.textContent = `
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(gradientStyle);

    // Initialize page
    updateActiveNav();
    console.log('Gila Cosmetics SPA initialized successfully!');
});

// Language system functions
function initLanguageSystem() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('gilaCosmetics_language') || 'en';
    currentLanguage = savedLanguage;
    
    // Apply language and direction
    updateLanguage();
    updatePageDirection();
    
    // Set up language selector event listener
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function(e) {
            switchLanguage(e.target.value);
        });
        languageSelector.value = currentLanguage;
    }
}

function switchLanguage(lang) {
    if (languageData[lang]) {
        currentLanguage = lang;
        localStorage.setItem('gilaCosmetics_language', lang);
        updateLanguage();
        updatePageDirection();
    }
}

function updateLanguage() {
    const data = languageData[currentLanguage];
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = ['home', 'products', 'services', 'about', 'contact'];
    navLinks.forEach((link, index) => {
        if (navTexts[index]) {
            link.textContent = data[navTexts[index]];
        }
    });
    
    // Update all elements with data-lang attributes
    const elementsWithLang = document.querySelectorAll('[data-lang]');
    elementsWithLang.forEach(element => {
        const langKey = element.getAttribute('data-lang');
        if (data[langKey]) {
            element.textContent = data[langKey];
        }
    });
    
    // Update form placeholders and options (elements without data-lang)
    updateInputPlaceholder('input[type="text"]', data.formNamePlaceholder);
    updateInputPlaceholder('input[type="email"]', data.formEmailPlaceholder);
    updateInputPlaceholder('textarea', data.formMessagePlaceholder);
    
    // Update select options (not using data-lang to avoid conflicts)
    const selectElement = document.querySelector('select:not(.language-selector)');
    if (selectElement) {
        const options = selectElement.querySelectorAll('option');
        if (options.length >= 4) {
            options[0].textContent = data.selectServiceOption;
            options[1].textContent = data.makeupOption;
            options[2].textContent = data.consultationOption;
            options[3].textContent = data.skincareOption;
        }
    }
}

function updatePageDirection() {
    document.documentElement.dir = currentLanguage === 'he' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLanguage === 'he');
}

function updateInputPlaceholder(selector, placeholder) {
    const input = document.querySelector(selector);
    if (input) {
        input.placeholder = placeholder;
    }
}