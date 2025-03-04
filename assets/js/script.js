// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    if (toggleButton && themeIcon) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeIcon.innerHTML = '<i class="fas fa-moon"></i>';
        }

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeIcon.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    } else {
        console.log('Theme toggle elements not found!');
    }

    // Fix: Ensure "Projects" button does NOT reload infinitely
    const projectButton = document.getElementById('project-button');

    if (projectButton) {
        projectButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents unnecessary reload

            const currentPath = window.location.pathname.replace(/\/$/, ""); 
            const targetPath = "/projects";

            console.log("Current Path:", currentPath);

            // If already on /projects or a subpage, do nothing
            if (currentPath === targetPath || currentPath.startsWith(targetPath)) {
                console.log("Already on Projects page, navigation stopped.");
                return;
            }

            // Navigate to /projects/
            console.log("Navigating to Projects page...");
            window.location.href = targetPath + "/";
        });
    } else {
        console.log('Project button not found!');
    }
});
