// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAszu0u-nrUL2P5l338z3jki0aNhsrVoJk",
    authDomain: "climateconnect-7619c.firebaseapp.com",
    databaseURL: "https://climateconnect-7619c-default-rtdb.firebaseio.com",
    projectId: "climateconnect-7619c",
    storageBucket: "climateconnect-7619c.appspot.com",
    messagingSenderId: "298420313392",
    appId: "1:298420313392:web:8c0aad998ef9d5dcd23cf5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', function() {
    const eventsList = document.getElementById('events-list');
    const modalBackground = document.getElementById('modal-background');
    const modal = document.getElementById('event-details-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Function to display event details in a modal
    function displayEventDetails(event) {
        document.getElementById('event-modal-name').innerText = event.name;
        document.getElementById('event-modal-description').innerText = event.description;
        document.getElementById('event-modal-location').innerText = event.location;
        document.getElementById('event-modal-date').innerText = event.date;
        document.getElementById('event-modal-time').innerText = event.time;
        document.getElementById('event-modal-link').innerHTML = `<a href="${event.link}" target="_blank">${event.link}</a>`;

        modal.style.display = 'block';
        modalBackground.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        modalBackground.style.display = 'none';
    }

    closeModalButton.addEventListener('click', closeModal);
    modalBackground.addEventListener('click', closeModal);

    // Function to remove past events
    function removePastEvents() {
        const today = new Date().toISOString().split('T')[0];

        db.collection('events')
            .where('date', '<', today)
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    db.collection('events').doc(doc.id).delete()
                        .then(() => {
                            console.log(`Event with ID ${doc.id} has been removed.`);
                        })
                        .catch(error => {
                            console.error("Error removing event:", error);
                        });
                });
            })
            .catch(error => {
                console.error("Error fetching events:", error);
            });
    }

    // Display events from Firestore
    function displayEvents() {
        const today = new Date().toISOString().split('T')[0];

        db.collection('events')
            .where('date', '>=', today)
            .orderBy('date', 'asc')
            .onSnapshot((snapshot) => {
                eventsList.innerHTML = ''; // Clear the list before populating

                snapshot.forEach(doc => {
                    const event = doc.data();
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<strong>${event.name}</strong>`;
                    listItem.addEventListener('click', () => {
                        displayEventDetails(event);
                    });
                    eventsList.appendChild(listItem);
                });
            });
    }

    // Call the functions to remove past events and display current events
    removePastEvents();
    displayEvents();
});
