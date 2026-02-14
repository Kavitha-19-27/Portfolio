/**
 * Kavitha M Portfolio - Main JavaScript
 * Handles navigation, form validation, animations, and interactivity
 */

// ====================================
// DOM ELEMENT REFERENCES
// ====================================
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');
const contactForm = document.getElementById('contactForm');
const backToTopBtn = document.getElementById('backToTop');
const preloader = document.getElementById('preloader');
const scrollProgress = document.getElementById('scrollProgress');
const themeToggle = document.getElementById('themeToggle');
const heroTagline = document.querySelector('.hero__tagline');

// ====================================
// PRELOADER
// ====================================

/**
 * Hide preloader when page is fully loaded
 */
function hidePreloader() {
    if (preloader) {
        preloader.classList.add('preloader--hidden');
        // Remove from DOM after animation
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
}

window.addEventListener('load', hidePreloader);

// Fallback: hide preloader after 3 seconds max
setTimeout(hidePreloader, 3000);

// ====================================
// SCROLL PROGRESS BAR
// ====================================

/**
 * Update scroll progress bar width based on scroll position
 */
function updateScrollProgress() {
    if (!scrollProgress) return;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    scrollProgress.style.width = `${scrollPercent}%`;
}

// Note: Scroll listener attached via throttle at end of file

// ====================================
// DARK MODE - Auto detect system preference
// ====================================

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Initialize theme on page load
initTheme();

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// ====================================
// TYPING ANIMATION EFFECT
// ====================================

/**
 * Create typing animation effect
 */
function initTypingAnimation() {
    if (!heroTagline) return;
    
    const phrases = [
        'CSE Student at SRCEC, Coimbatore',
        'Aspiring MERN Stack Developer',
        'Building One Project at a Time',
        'Passionate About Web Development'
    ];
    
    let phraseIndex = 0;
    let charIndex = phrases[0].length; // Start with first phrase fully typed
    let isDeleting = false;
    let typingSpeed = 2000; // Start with pause before deleting
    
    // Create cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    heroTagline.appendChild(cursor);
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            charIndex--;
            typingSpeed = 40;
        } else {
            charIndex++;
            typingSpeed = 80;
        }
        
        // Update text content
        heroTagline.textContent = currentPhrase.substring(0, charIndex);
        
        // Re-append cursor
        heroTagline.appendChild(cursor);
        
        // Check if word is complete
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing after initial delay (first phrase already shown)
    setTimeout(() => {
        isDeleting = true;
        type();
    }, 2000);
}

// Initialize typing animation
initTypingAnimation();

// ====================================
// MOBILE NAVIGATION
// ====================================

/**
 * Toggle mobile menu open/closed
 */
function toggleMobileMenu() {
    if (!navToggle || !navMenu) return;
    
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    navMenu.classList.toggle('nav__menu--open');
    document.body.classList.toggle('body-scroll-lock');
    
    // Update overlay
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeMobileMenu);
    }
    overlay.classList.toggle('nav-overlay--visible');
    
    // Trap focus when menu is open
    if (!isOpen) {
        const firstLink = navMenu.querySelector('.nav__link');
        if (firstLink) firstLink.focus();
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
    }
    if (navMenu) {
        navMenu.classList.remove('nav__menu--open');
    }
    document.body.classList.remove('body-scroll-lock');
    
    const overlay = document.querySelector('.nav-overlay');
    if (overlay) {
        overlay.classList.remove('nav-overlay--visible');
    }
}

// Event listeners for mobile menu
if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
}

// Close menu on nav link click
if (navLinks && navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                closeMobileMenu();
            }
        });
    });
}

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('nav__menu--open')) {
        closeMobileMenu();
        navToggle.focus();
    }
});

// ====================================
// SMOOTH SCROLLING
// ====================================

/**
 * Smooth scroll to element with offset for fixed header
 * @param {string} targetId - The ID of the target element
 */
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;
    
    const headerHeight = header ? header.offsetHeight : 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Add smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            smoothScrollTo(href);
            
            // Update URL without jumping
            history.pushState(null, null, href);
        }
    });
});

// ====================================
// HEADER SCROLL EFFECT
// ====================================

/**
 * Add/remove scrolled class based on scroll position
 */
function handleHeaderScroll() {
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

// Note: Scroll listener attached via throttle at end of file

// ====================================
// ACTIVE NAV LINK HIGHLIGHTING
// ====================================

/**
 * Highlight nav link based on current section in view
 */
function highlightActiveNavLink() {
    if (!header || !navLinks || navLinks.length === 0) return;
    
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + header.offsetHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('nav__link--active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('nav__link--active');
                }
            });
        }
    });
}

// Note: Scroll listener attached via throttle at end of file

// ====================================
// BACK TO TOP BUTTON
// ====================================

/**
 * Show/hide back to top button based on scroll position
 */
function handleBackToTop() {
    if (!backToTopBtn) return;
    
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('back-to-top--visible');
    } else {
        backToTopBtn.classList.remove('back-to-top--visible');
    }
}

// Note: Scroll listener attached via throttle at end of file

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====================================
// FORM VALIDATION & SUBMISSION
// ====================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show error message for form field
 * @param {HTMLElement} input - Input element
 * @param {string} message - Error message
 */
function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.add('form-input--error');
    input.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
}

/**
 * Clear error message for form field
 * @param {HTMLElement} input - Input element
 */
function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove('form-input--error');
    input.setAttribute('aria-invalid', 'false');
    errorElement.textContent = '';
}

/**
 * Validate a single form field
 * @param {HTMLElement} input - Input element to validate
 * @returns {boolean} - Whether field is valid
 */
function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.name;
    
    // Clear previous error
    clearError(input);
    
    // Check if empty
    if (!value) {
        showError(input, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
        return false;
    }
    
    // Email validation
    if (input.type === 'email' && !isValidEmail(value)) {
        showError(input, 'Please enter a valid email address');
        return false;
    }
    
    // Message minimum length
    if (fieldName === 'message' && value.length < 10) {
        showError(input, 'Message must be at least 10 characters');
        return false;
    }
    
    return true;
}

// Real-time validation on blur
if (contactForm) {
    const formInputs = contactForm.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        // Clear error on input
        input.addEventListener('input', () => {
            if (input.classList.contains('form-input--error')) {
                clearError(input);
            }
        });
    });
}

/**
 * Handle form submission with Formspree
 * @param {Event} e - Submit event
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('formSuccess');
    
    // Validate all fields
    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isMessageValid = validateField(messageInput);
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        // Focus first invalid field
        const firstInvalid = contactForm.querySelector('.form-input--error');
        if (firstInvalid) {
            firstInvalid.focus();
        }
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('btn--loading');
    submitBtn.disabled = true;
    
    // Send form data to Web3Forms
    try {
        const formData = new FormData(contactForm);
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            // Remove loading state
            submitBtn.classList.remove('btn--loading');
            submitBtn.disabled = false;
            
            // Show success message
            successMessage.classList.add('form-success--visible');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('form-success--visible');
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        submitBtn.classList.remove('btn--loading');
        submitBtn.disabled = false;
        alert('Oops! Something went wrong. Please try again.');
    }
}

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ====================================
// SCROLL ANIMATIONS
// ====================================

/**
 * Initialize Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section');
    const projectsGrid = document.querySelector('.projects__grid');
    const skillsList = document.querySelector('.skills__list');
    const skillsTags = document.querySelector('.skills__tags');
    const contactLinks = document.querySelector('.contact__links');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in--visible');
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                    // Trigger skill list and tags animations
                    if (skillsList) skillsList.classList.add('animate');
                    if (skillsTags) skillsTags.classList.add('animate');
                }
                
                // Trigger project cards animation
                if (entry.target.id === 'projects' && projectsGrid) {
                    projectsGrid.classList.add('animate');
                }
                
                // Trigger contact links animation
                if (entry.target.id === 'contact' && contactLinks) {
                    contactLinks.classList.add('animate');
                }
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/**
 * Animate skill progress bars
 */
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-item__progress');
    skillBars.forEach(bar => {
        const progress = bar.style.getPropertyValue('--progress');
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = progress;
        }, 200);
    });
}

// ====================================
// KEYBOARD NAVIGATION ENHANCEMENTS
// ====================================

/**
 * Add keyboard support for interactive elements
 */
function initKeyboardNavigation() {
    // Allow Enter/Space to trigger button-like elements
    document.querySelectorAll('[role="button"]').forEach(button => {
        button.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    
    // Arrow key navigation for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.setAttribute('tabindex', '0');
        tag.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' && index < skillTags.length - 1) {
                skillTags[index + 1].focus();
            } else if (e.key === 'ArrowLeft' && index > 0) {
                skillTags[index - 1].focus();
            }
        });
    });
}

// ====================================
// PROJECT CARD TILT EFFECT
// ====================================

/**
 * Add 3D tilt effect to project cards on mouse move
 * Only enabled on devices with fine pointer (non-touch)
 */
function initProjectCardTilt() {
    // Skip tilt effect on touch devices for better performance
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;
    
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.classList.add('project-card--tilt');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ====================================
// SMOOTH NUMBER COUNTER (for future use)
// ====================================

/**
 * Animate numbers counting up
 * @param {HTMLElement} element - Element containing the number
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * target);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// ====================================
// INITIALIZATION
// ====================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    // Initial header state check
    handleHeaderScroll();
    handleBackToTop();
    highlightActiveNavLink();
    updateScrollProgress();
    
    // Initialize animations
    initScrollAnimations();
    initKeyboardNavigation();
    initProjectCardTilt();
    
    // Log initialization for debugging
    console.log('Portfolio initialized successfully! 🚀');
    console.log('Dark mode: Press theme toggle to switch');
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ====================================
// UTILITY FUNCTIONS
// ====================================

/**
 * Debounce function for scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} - Debounced function
 */
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} - Throttled function
 */
function throttle(func, limit = 16) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll handlers for better performance
// Use passive: true for better mobile scroll performance
window.addEventListener('scroll', throttle(() => {
    handleHeaderScroll();
    handleBackToTop();
    highlightActiveNavLink();
    updateScrollProgress();
}, 100), { passive: true });
