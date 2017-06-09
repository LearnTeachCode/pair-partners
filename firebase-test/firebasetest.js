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
var messageBox = document.getElementById("message");

// Get a reference to the row of our database called "greeting"
var dbRef = firebase.database().ref().child("myname");

// Whenever our database reference is updated, show the data on our web page!
dbRef.on("value", function(dataSnapshot) {
	messageBox.textContent = dataSnapshot.val();
});

