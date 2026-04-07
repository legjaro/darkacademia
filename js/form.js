// ============================================
// FORM MODULE
// Handles contact form functionality
// ============================================

const Form = {
    contactForm: null,

    init() {
        this.contactForm = document.getElementById('contactForm');
        
        if (this.contactForm) {
            this.setupFormSubmission();
        }
    },

    setupFormSubmission() {
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate form
            if (!this.validateForm(name, email, message)) {
                return;
            }

            // Show loading state
            const submitButton = this.contactForm.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                this.showSuccessMessage(name);
                this.contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    },

    validateForm(name, email, message) {
        if (!name || name.trim().length < 2) {
            alert('Por favor, introduce un nombre válido.');
            return false;
        }

        if (!email || !this.isValidEmail(email)) {
            alert('Por favor, introduce un email válido.');
            return false;
        }

        if (!message || message.trim().length < 10) {
            alert('Por favor, introduce un mensaje de al menos 10 caracteres.');
            return false;
        }

        return true;
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    showSuccessMessage(name) {
        alert(`¡Gracias ${name}! Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.`);
    }
};

export default Form;
