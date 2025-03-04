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

    if (projectButton && !projectButton.hasAttribute('data-event-attached')) {
        projectButton.setAttribute('data-event-attached', 'true');
        projectButton.addEventListener('click', (event) => {
            event.preventDefault(); // Stops unintended reloading

            // Get the current URL path and normalize it
            let currentPath = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash if exists

            console.log("Current Path:", currentPath); // Debugging log

            // Target projects path
            let targetPath = "/projects";

            // If already on "/projects" or any subpage, do nothing
            if (currentPath === targetPath || currentPath.startsWith(targetPath + "/")) {
                console.log("Already on the Projects page. No navigation needed.");
                return;
            }

            // Otherwise, navigate to "/projects/"
            console.log("Navigating to Projects page...");
            window.location.href = targetPath + "/";
        });
    } else {
        console.log('Project button not found or event already attached!');
    }
});
