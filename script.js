document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');

    // Create snowflakes
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Set random initial position
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        snowflake.style.left = `${initialX}px`;
        snowflake.style.top = `${initialY}px`;

        // Set random animation duration
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;

        snowflakesContainer.appendChild(snowflake);
    }
});

