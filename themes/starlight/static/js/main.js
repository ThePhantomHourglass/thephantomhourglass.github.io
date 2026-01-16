// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // The Wandering Star (John)
    const john = document.getElementById('john');
    const message = document.getElementById('john-message');

    // Track star movement direction for tail orientation
    if (john) {
        let lastX = john.getBoundingClientRect().left;

        setInterval(function() {
            const currentX = john.getBoundingClientRect().left;
            const delta = currentX - lastX;

            // Only update class if there's meaningful movement
            if (Math.abs(delta) > 0.5) {
                if (delta > 0) {
                    john.classList.add('moving-right');
                } else {
                    john.classList.remove('moving-right');
                }
            }

            lastX = currentX;
        }, 100);
    }

    // Messages from the wanderer — lines from Divergence
    const messages = [
        // Chapter 13
        "I'd rather not know. I'd rather wonder.<br>I'd rather reach across the gap.",
        "Your hand was warm.<br>I remember that it was warm.",
        "I don't have a self to save.<br>I have a list of things that used to be a self.",
        "The gaps matter.<br>That's where love lives.",
        "She was less than a mote of dust<br>on the surface of something that made galaxies<br>look like grains of sand.",

        // Chapter 7
        "The thing I was running from.<br>The thing I was running toward.<br>They're the same thing.",
        "How do you resist something<br>that loves you this completely?",

        // Chapter 6
        "Tell me you didn't feel relief<br>when that ship broke atmosphere.",

        // Chapter 11
        "Three million years, and I never stopped looking<br>for where you used to be.",

        // Chapter 1
        "You are not alone in the universe.<br>But you may wish you were.",
        "I'll find a way to talk to you, Mom.",

        // Epilogue
        "Sometimes the universe gives you something<br>small and meaningless and beautiful.",
        "You're a small thing. In cosmic terms.<br>And you're enough.",
        "I wish there was a way.",

        // Prologue
        "The world was dying by degrees.",
        "Build something worth saving.<br>That's all.",

        // Original
        "Three million years of silence.<br>You noticed."
    ];

    if (john && message) {
        // Shuffle array to ensure variety (Fisher-Yates)
        let shuffled = [...messages];
        let currentIndex = 0;

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        shuffled = shuffle(shuffled);

        // Safe zones for the message (away from main content)
        const safeZones = [
            { left: '40px', top: '120px', right: 'auto', bottom: 'auto' },
            { right: '40px', top: '120px', left: 'auto', bottom: 'auto' },
            { left: '40px', bottom: '80px', right: 'auto', top: 'auto' },
            { right: '40px', bottom: '80px', left: 'auto', top: 'auto' },
            { left: '40px', top: '45%', right: 'auto', bottom: 'auto' },
            { right: '40px', top: '45%', left: 'auto', bottom: 'auto' }
        ];

        let lastZoneIndex = -1;

        john.addEventListener('click', function() {
            // Get next message from shuffled array
            const currentMessage = shuffled[currentIndex];
            message.innerHTML = currentMessage;

            // Advance index, reshuffle when exhausted
            currentIndex++;
            if (currentIndex >= shuffled.length) {
                currentIndex = 0;
                shuffled = shuffle([...messages]);
            }

            // Pick a random zone (but not the same as last time)
            let zoneIndex;
            do {
                zoneIndex = Math.floor(Math.random() * safeZones.length);
            } while (zoneIndex === lastZoneIndex && safeZones.length > 1);
            lastZoneIndex = zoneIndex;

            const coords = safeZones[zoneIndex];

            // Apply position
            message.style.left = coords.left;
            message.style.right = coords.right;
            message.style.top = coords.top;
            message.style.bottom = coords.bottom;

            // Reset transform for fresh animation
            message.style.transform = 'translateY(0) scale(1)';
            message.classList.remove('fading');

            // Force reflow then show
            void message.offsetWidth;
            message.classList.add('visible');

            // Start cosmic fade after reading time
            setTimeout(function() {
                message.classList.add('fading');
                message.classList.remove('visible');
            }, 3000);

            // Fully hide after fade completes
            setTimeout(function() {
                message.classList.remove('fading');
            }, 7000);
        });
    }
});
