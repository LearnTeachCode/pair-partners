// JavaScript Document

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAAKWAWX9IYQjC1q7hjZL5nsTqWfEulU9I",
    authDomain: "fir-test-5f0d3.firebaseapp.com",
    databaseURL: "https://fir-test-5f0d3.firebaseio.com",
    projectId: "fir-test-5f0d3",
    storageBucket: "fir-test-5f0d3.appspot.com",
    messagingSenderId: "852596610591"
  };
  firebase.initializeApp(config);
  
  // Create a JavaScript object for the HTML element that has id="message"
var usernameBox = document.getElementById("username");

// Create a JavaScript object for the HTML element that has id="message"
var messageBox = document.getElementById("message");

// Get a reference to the row of our database called "greeting"
// var dbRef = firebase.database().ref().child("myname");

var dbRef = firebase.database().ref();

// Get a reference to the "greeting" section of our database
// var dbGreeting = dbRef.child("greeting");
var dbGreeting = dbRef.child("greeting");
// Get a reference to the "myname" section of our database
var dbUsername = dbRef.child("myname");

// Whenever our database reference is updated, show the data on our web page!
// Where is the event happening? On the dbRef object, which now points to the root of our Firebase database!
// Which event are we listening for? The "value" event, which is triggered any time a value changes inside this database location.
// What should happen when the event occurs? Run an anonymous function that will display the value of the new data inside the messageBox element on our web page.

// textContent = text in the paragraph
dbGreeting.on("value", function(dataSnapshot) {
	messageBox.textContent = dataSnapshot.val();
  console.log( dataSnapshot.val() );
});

dbUsername.on("value", function(dataSnapshot) {
  usernameBox.textContent = dataSnapshot.val();
  console.log( dataSnapshot.val() );
});
