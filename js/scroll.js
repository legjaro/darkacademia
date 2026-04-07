// ============================================
// SCROLL MODULE
// Handles smooth scrolling and animations
// ============================================

const Scroll = {
    fadeElements: null,

    init() {
        this.fadeElements = document.querySelectorAll('.fade-in');
        
        if (this.fadeElements.length > 0) {
            this.setupFadeInAnimation();
        }

        this.setupSmoothScroll();
    },

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbar = document.getElementById('navbar');
                    const navHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    setupFadeInAnimation() {
        const fadeInOnScroll = () => {
            this.fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };

        // Check on load and scroll
        window.addEventListener('load', fadeInOnScroll);
        window.addEventListener('scroll', fadeInOnScroll);
        
        // Initial check
        fadeInOnScroll();
    }
};

export default Scroll;
