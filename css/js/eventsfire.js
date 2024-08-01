const firebaseConfig = {
    apiKey: "AIzaSyAszu0u-nrUL2P5l338z3jki0aNhsrVoJk",
    authDomain: "climateconnect-7619c.firebaseapp.com",
    databaseURL: "https://climateconnect-7619c-default-rtdb.firebaseio.com",
    projectId: "climateconnect-7619c",
    storageBucket: "climateconnect-7619c.appspot.com",
    messagingSenderId: "298420313392",
    appId: "1:298420313392:web:8c0aad998ef9d5dcd23cf5"
  };
firebase.initializeApp(firebaseConfig);
var climateConnectDB=firebase.database().ref("climateConnect");
document.getElementById("climateConnect").addEventListener('submit',submitEvent);
function submitEvent(event){
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
  var newclimateConnect=climateConnect.push();
  newclimateConnect.set(newEvent);
  
  alert('Event created successfully!');

  setTimeout(() => {
      window.location.href = 'events.html';
  }, 500);
};
