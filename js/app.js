// ============================================
// MAIN APPLICATION ENTRY POINT
// Initializes all modules
// ============================================

import Navigation from './navigation.js';
import Scroll from './scroll.js';
import Form from './form.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
    Scroll.init();
    Form.init();
    
    console.log('Dark Academia - Application initialized');
});
