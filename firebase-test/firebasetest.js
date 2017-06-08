 // Initialize Firebase
var config = {
    apiKey: "AIzaSyArtK1XCgIvcyRC8-SVTdRn3bsSKA-ogNo",
    authDomain: "fir-test-6d238.firebaseapp.com",
    databaseURL: "https://fir-test-6d238.firebaseio.com",
    projectId: "fir-test-6d238",
    storageBucket: "fir-test-6d238.appspot.com",
    messagingSenderId: "64289804527"
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