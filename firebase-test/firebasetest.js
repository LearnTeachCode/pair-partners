// Initialize Firebase
var config = {
	apiKey: "AIzaSyCdoBkKYmhVlgvy46sBKLLknJUszf-TYAc",
	authDomain: "test-web-app-4fde9.firebaseapp.com",
	databaseURL: "https://test-web-app-4fde9.firebaseio.com",
	projectId: "test-web-app-4fde9",
	storageBucket: "test-web-app-4fde9.appspot.com",
	messagingSenderId: "406177608219"
};

firebase.initializeApp(config);

// Create a JavaScript object for the HTML element that has id="message"
var messageBox = document.getElementById("message");
// Create a JavaScript object for the HTML element that has id="username"
var usernameBox = document.getElementById("username");

// Get a reference to the root of our database
var dbRef = firebase.database().ref();
// Get a reference to the "greeting" section of our database
var dbGreeting = dbRef.child("greeting");
// Get a reference to the "myname" section of our database
var dbUsername = dbRef.child("myname");

// Whenever "greeting" value in our database is updated, show the data inside messageBox!
dbGreeting.on("value", function(dataSnapshot) {
	messageBox.textContent = dataSnapshot.val();
	console.log( dataSnapshot.val() );
});

// Whenever "myname" value in our database is updated, show the data inside usernameBox!
dbUsername.on("value", function(dataSnapshot) {
	usernameBox.textContent = dataSnapshot.val();
	console.log( dataSnapshot.val() );
});
