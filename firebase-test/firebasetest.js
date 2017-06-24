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

  // Use Firebase with GitHub Auth to log in the user
  firebase.auth().signInWithPopup(provider).catch(function(error) {
    // Log any errors to the console
    console.log(error);
  });

});


// When user clicks logout button:
logoutButton.addEventListener("click", function(){
  console.log("User clicked LOGOUT");
  // Use Firebase with GitHub Auth to log in the user
  firebase.auth().signOut().catch(function(error) {
    // Log any errors to the console
    console.log(error);

  });
});


// When user logs in or logs out:
firebase.auth().onAuthStateChanged(function(user){
  // If user is now logged in:
  if (user) { 

    console.log('User successfully logged in to Firebase!');
    // HERE: Update the paragraph with ID of "userinfo" to display user's GitHub username and GitHub profile photo!
    console.log(user.email);


  document.getElementById("userinfo").innerHTML = 'The <strong>' + user.email + '</strong> will go here and the' + 'profile photo will go here: <img src="' + user.photoURL + '">';
  // Otherwise, if no user currently logged in:

  } else {

    console.log('User successfully logged OUT from Firebase!');
  document.getElementById("userinfo").textContent = 'Not currently logged in.';


  }
});




