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

var provider = new firebase.auth.GithubAuthProvider();

// Create a JavaScript object for the HTML element that has id="message"
var messageBox = document.getElementById("message");
// Create a JavaScript object for the HTML element that has id="username"
var usernameBox = document.getElementById("username");

// Create Objects for Buttons UserInfo
var userInfoBox = document.getElementById("userinfo");
// Create Objects for Button Login
var loginButton = document.getElementById("login");
// Create Objects for Button Logout
var logoutButton = document.getElementById("logout");

// Get a reference to the root of our database
var dbRef = firebase.database().ref();
// Get a reference to the "greeting" section of our database
var dbGreeting = dbRef.child("greeting");
// Get a reference to the "myname" section of our database
var dbUsername = dbRef.child("myname");

// button function and event listener
document.addEventListener("click", myButton);

function myButton(github){
	alert("hi");
}
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

// Event Listener for Login
// Use Firebase with Github Auth to log in the user
firebase.auth().signInWithRedirect(provider).catch(function(error){
	// Log any errors to the console
	console.log(error);
});


// Event Listener for Logout
// Change your logout button's event listener 
firebase.auth().signOut().catch(function(error){
	// Log any errors to the console
	console.log(error);
});

// onAuthStateChanged
//When user logs in or logs out:
firebase.auth().onAuthStateChanged(function(user){
	// If user is now logged in:
	if (user){
		console.log("User successfully logged in to Firebase!");
		
		//Here: update the paragraph with ID of "userinfo to display Github's Username and Github profile photo "
		//Otherwise, if no user currently logged in:
	}
	else
	{
		console.log("User successfully logged OUT from Firebase!");
		
		// Here: Update the paragraph with ID of "userinfo" to display the message "Not currently logged in."
	}
	
});