document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle Functionality for Mobile Devices
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    // Toggle the 'open' class on the navigation menu when the menu button is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });

    const resourceLinks = document.querySelectorAll('.resource-section a');

    resourceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            console.log(`Resource downloaded: ${link.href}`);
        });
    });
});
