// Carousel and Marquee Infinite Loop Logic
document.addEventListener('DOMContentLoaded', function() {

     const darkModeBtns = document.querySelectorAll('#darkModeAwesomeBtn, #navbarDarkModeBtn');

      if (!darkModeBtns.length) return; // Exit if no buttons are found

    // Set initial theme based on preference or storage
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }
    // Function to duplicate content for infinite scroll
    const createInfiniteScroll = (selector, animationClass) => {
        const track = document.querySelector(selector);
        if (track && track.children.length > 0) {
            // Check if it's already duplicated to prevent multiple runs
            if (track.getAttribute('data-duplicated') !== 'true') {
                const content = track.innerHTML;
                track.innerHTML += content;
                track.setAttribute('data-duplicated', 'true');
            }
        }
    };

    // Function to handle the theme toggle
    const toggleTheme = () => {
        document.body.classList.add('fade-theme'); // Add fade transition class
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Remove fade class after animation completes
        setTimeout(() => {
            document.body.classList.remove('fade-theme');
        }, 500);
    };
    
    // Add the same click event listener to every button found
    darkModeBtns.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
});

    // Investors Marquee
    createInfiniteScroll('.investors-track');

    // Courses Carousel
    createInfiniteScroll('.carousel-track.coursesBoxes');




// Skeleton screen hide logic
window.addEventListener('load', function() {
    const skeleton = document.getElementById('skeleton-screen');
    if (skeleton) {
        skeleton.style.transition = 'opacity 0.5s ease-out';
        skeleton.style.opacity = '0';
        setTimeout(() => {
            skeleton.style.display = 'none';
        }, 500); // Wait for transition to finish
    }
});


// Dark mode awesome button logic
document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeAwesomeBtn');
    if (!darkModeBtn) return;

    // Set initial theme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeBtn.addEventListener('click', function() {
        document.body.classList.add('fade-theme'); // Add fade transition class
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Remove fade class after animation completes
        setTimeout(() => {
            document.body.classList.remove('fade-theme');
        }, 500);
    });
});