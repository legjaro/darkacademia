// ============================================
// NAVIGATION MODULE
// Handles all navigation functionality
// ============================================

const Navigation = {
    navbar: null,
    navToggle: null,
    navMenu: null,
    navLinks: null,

    init() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');

        if (this.navToggle) {
            this.setupMobileMenu();
        }

        if (this.navLinks.length > 0) {
            this.setupNavLinks();
        }

        this.setupScrollEffect();
        this.setupActiveLinkOnScroll();
    },

    setupMobileMenu() {
        this.navToggle.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
        });
    },

    setupNavLinks() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
            });
        });
    },

    setupScrollEffect() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    },

    setupActiveLinkOnScroll() {
        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + this.navbar.offsetHeight + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.style.color = 'var(--color-accent-gold)';
                        } else {
                            link.style.color = '';
                        }
                    });
                }
            });
        });
    }
};

export default Navigation;
