// scripts.js

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle Functionality for Mobile Devices
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    // Toggle the 'open' class on the navigation menu when the menu button is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });

    // Function to handle resource download (optional)
    // This can be expanded to include tracking or other functionalities
    const resourceLinks = document.querySelectorAll('.resource-section a');

    resourceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // You can add any additional functionality here
            // For example, tracking downloads or logging
            console.log(`Resource downloaded: ${link.href}`);
        });
    });
});
