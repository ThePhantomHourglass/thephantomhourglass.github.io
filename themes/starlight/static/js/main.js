// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // The Wandering Star
    const john = document.getElementById('john');
    const message = document.getElementById('john-message');

    if (john && message) {
        john.addEventListener('click', function() {
            // Position message near the star
            const rect = john.getBoundingClientRect();

            // Place message to the left and slightly below the star
            let left = rect.left - 180;
            let top = rect.top + 20;

            // Keep message on screen
            if (left < 20) left = rect.right + 20;
            if (top + 50 > window.innerHeight) top = rect.top - 60;

            message.style.left = left + 'px';
            message.style.top = top + 'px';

            // Reset and show
            message.classList.remove('fading');
            message.classList.add('visible');

            // Start slow fade after a moment
            setTimeout(function() {
                message.classList.add('fading');
                message.classList.remove('visible');
            }, 2500);

            // Fully hide after fade completes
            setTimeout(function() {
                message.classList.remove('fading');
            }, 5500);
        });
    }
});
