// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    if (toggleButton && themeIcon) {
        // Check for saved theme preference or default to light mode
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.innerHTML = '<i class="fas fa-sun"></i>'; // Sun for dark mode
        } else {
            themeIcon.innerHTML = '<i class="fas fa-moon"></i>'; // Moon for light mode
        }

        // Add click event listener to toggle dark mode
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeIcon.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    } else {
        console.log('Theme toggle elements not found!');
    }

    // Project Button Navigation
    const projectButton = document.getElementById('project-button');

    if (projectButton) {
        projectButton.addEventListener('click', () => {
            window.location.href = '_projects/index.md';
        });
    } else {
        console.log('Project button not found!');
    }
});
