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
        // Safe zones for the message (away from main content)
        // Content is centered with max-width 720px, so sides are usually empty
        const safeZones = [
            { position: 'top-left', getCoords: function() {
                return { left: '40px', top: '120px', right: 'auto', bottom: 'auto' };
            }},
            { position: 'top-right', getCoords: function() {
                return { right: '40px', top: '120px', left: 'auto', bottom: 'auto' };
            }},
            { position: 'bottom-left', getCoords: function() {
                return { left: '40px', bottom: '80px', right: 'auto', top: 'auto' };
            }},
            { position: 'bottom-right', getCoords: function() {
                return { right: '40px', bottom: '80px', left: 'auto', top: 'auto' };
            }},
            { position: 'left-margin', getCoords: function() {
                // Left side of screen, vertically centered
                return { left: '40px', top: '45%', right: 'auto', bottom: 'auto' };
            }},
            { position: 'right-margin', getCoords: function() {
                // Right side of screen, vertically centered
                return { right: '40px', top: '45%', left: 'auto', bottom: 'auto' };
            }}
        ];

        john.addEventListener('click', function() {
            // Pick a random safe zone
            const zone = safeZones[Math.floor(Math.random() * safeZones.length)];
            const coords = zone.getCoords();

            // Apply position
            message.style.left = coords.left;
            message.style.right = coords.right;
            message.style.top = coords.top;
            message.style.bottom = coords.bottom;

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
