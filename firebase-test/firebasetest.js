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

//create an instance of Firebase's GitHub provider object:
var provider = new firebase.auth.GithubAuthProvider();

// Create a JavaScript object for each HTML element that we need to use"
var messageBox = document.getElementById("message");
var usernameBox = document.getElementById("username");

var userInfoBox = document.getElementById("userinfo");
var loginButton = document.getElementById("loginbtn");
var logoutButton = document.getElementById("logoutbtn");

// Get a reference to the root of our database called "greeting"
var dbRef = firebase.database().ref();
// Get a reference to the "greeting" section of our database
var dbGreeting = dbRef.child("greeting");
// Get a reference to the "myname" section of our database
var dbUsername = dbRef.child("myname");

// Whenever "greeting" value in our database reference is updated, show the data on our web page!
dbGreeting.on("value", function(dataSnapshot) { 
      messageBox.textContent = dataSnapshot.val(); 
      console.log( dataSnapshot.val() );
});


// Whenever "myname" value in our database is updated, show the data inside usernameBox!
dbUsername.on("value", function(dataSnapshot) { 
      usernameBox.textContent = dataSnapshot.val(); 
      console.log( dataSnapshot.val() );
});


// When user clicks login button:
loginButton.addEventListener("click", function()  {
// Use Firebase with GitHub Auth to log in the user
firebase.auth().signInWithRedirect(provider).catch(function(error) {
  // Log any errors to the console
  console.log(error);
});


// When user clicks logout button:
logoutButton.addEventListener("click", function() {
// Use Firebase with GitHub Auth to log in the user
firebase.auth().signOut().catch(function(error) {
  // Log any errors to the console
  console.log(error);
});

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

  
