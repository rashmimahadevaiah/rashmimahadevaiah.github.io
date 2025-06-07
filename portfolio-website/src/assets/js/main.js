// This file contains the main JavaScript functionalities for interactivity, such as project filtering and smooth scrolling.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Event listener for project filtering
    const filterProjects = () => {
        const filterButtons = document.querySelectorAll('.filter-button');
        const projects = document.querySelectorAll('.project');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter');

                projects.forEach(project => {
                    if (filterValue === 'all' || project.classList.contains(filterValue)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    };

    // Initialize functions
    filterProjects();
});