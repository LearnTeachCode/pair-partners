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

var userInfoBox = document.getElementById("userinfo");
var loginButton = document.getElementById("login");
var logoutButton = document.getElementById("logout");

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


// challenge 5
//When user clicks login button:
loginButton.addEventListener("click", function(){
 console.log("User clicked LOGIN");
});

// Use Firebase with GitHub Auth to log in the user
firebase.auth().signInWithPopup(provider).catch(function(error) {
  // Log any errors to the console
  console.log(error);
});

// When user clicks logout button:
logoutButton.addEventListener("click", function(){
  console.log("User clicked LOGOUT");
});

// Use Firebase with GitHub Auth to log in the user
firebase.auth().signOut().catch(function(error) {
  // Log any errors to the console
  console.log(error);
});
// challenge 5



// When user logs in or logs out:
firebase.auth().onAuthStateChanged(function(user){
  // If user is now logged in:
  if (user) {

    console.log('User successfully logged in to Firebase!');

    // HERE: Update the paragraph with ID of "userinfo" to display user's GitHub username and GitHub profile photo!

  // Otherwise, if no user currently logged in:
  } else {

    console.log('User successfully logged OUT from Firebase!');

    // HERE: Update the paragraph with ID of "userinfo" to display the message "Not currently logged in."

  }
});

//displayName
//Inherited from firebase.UserInfo#displayName

//photoURL
// Inherited from firebase.UserInfo#photoURL
