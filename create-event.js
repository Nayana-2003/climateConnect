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
    const eventForm = document.getElementById('event-form');
    const successMessage = document.getElementById('success-message');

    if (eventForm) {
        eventForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('eventName').value;
            const description = document.getElementById('eventDescription').value;
            const location = document.getElementById('eventLocation').value;
            const date = document.getElementById('eventDate').value;
            let time = document.getElementById('eventTime').value;
            const timePeriod = document.getElementById('eventTimePeriod').value;
            const link = document.getElementById('eventLink').value;

            time = `${time} ${timePeriod}`;
            
            const newEvent = { name, description, location, date, time, link };

            // Save event to Firestore
            db.collection('events').add(newEvent)
                .then(() => {
                    successMessage.classList.remove('hidden');
                    alert('Event created successfully!');
                    setTimeout(() => {
                        window.location.href = 'events.html';
                    }, 2000);
                })
                .catch(error => {
                    console.error("Error adding document: ", error);
                });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });
});

