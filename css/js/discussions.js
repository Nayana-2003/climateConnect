document.addEventListener('DOMContentLoaded', function() {
    const discussionForm = document.getElementById('discussion-form');
    const discussionList = document.getElementById('discussion-list');

    // Function to save discussion to local storage
    function saveDiscussion(discussion) {
        let discussions = JSON.parse(localStorage.getItem('discussions')) || [];
        discussions.push(discussion);
        localStorage.setItem('discussions', JSON.stringify(discussions));
    }

    // Function to load discussions from local storage
    function loadDiscussions() {
        return JSON.parse(localStorage.getItem('discussions')) || [];
    }

    // Display discussions on discussion.html
    function displayDiscussions() {
        const discussions = loadDiscussions();

        discussionList.innerHTML = ''; // Clear the list before populating

        discussions.forEach(discussion => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${discussion.userName}</strong><br>${discussion.content}`;
            discussionList.appendChild(listItem);
        });
    }

    // Handle form submission on create-discussion.html
    if (discussionForm) {
        discussionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const userName = document.getElementById('userName').value;
            const content = document.getElementById('content').value;
            
            const newDiscussion = { userName, content };
            saveDiscussion(newDiscussion);
            
            document.getElementById('success-message').classList.remove('hidden');
            
            setTimeout(() => {
                window.location.href = 'discussion.html';
            }, 500);
        });
    }

    // If on discussion.html, display the discussions
    if (discussionList) {
        displayDiscussions();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });
});
