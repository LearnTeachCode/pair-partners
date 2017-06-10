  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBHaZrBCDS_LPBUZvqbWg3-s1er_JqtUSY",
    authDomain: "fir-test-4f28e.firebaseapp.com",
    databaseURL: "https://fir-test-4f28e.firebaseio.com",
    projectId: "fir-test-4f28e",
    storageBucket: "fir-test-4f28e.appspot.com",
    messagingSenderId: "276366659662"
  };
  
  firebase.initializeApp(config);

// Create a JavaScript object for the HTML element that has id="message"
var messageBox = document.getElementById("message");

// Get a reference to the row of our database called "greeting"
var dbRef = firebase.database().ref().child("greeting");

// Whenever our database reference is updated, show the data on our web page!
dbRef.on("value", function(dataSnapshot) { 
  messageBox.textContent = dataSnapshot.val(); 
});