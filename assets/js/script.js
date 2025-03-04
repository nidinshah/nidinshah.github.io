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

    // Fix: Prevent Project Button from Reloading the Same Page
    const projectButton = document.getElementById('project-button');

    if (projectButton) {
        projectButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents unnecessary reloading

            const currentPath = window.location.pathname;

            // Check if user is already on /projects/ or any /projects/ subpage
            if (currentPath === "/projects/" || currentPath.startsWith("/projects/")) {
                console.log("Already on the Projects page. No navigation needed.");
                return; // Do nothing if already on the projects page
            }

            // Redirect only if user is NOT on the projects page
            window.location.href = "/projects/";
        });
    } else {
        console.log('Project button not found!');
    }
});
