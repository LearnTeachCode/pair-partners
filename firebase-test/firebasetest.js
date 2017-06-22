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
// Create a JavaScript object for the HTML element that has id="username"
var usernameBox = document.getElementById("username");

// Get a reference to the row of our database called "greeting"
var dbRef = firebase.database().ref();
// Get a reference to the "greeting" section of our database
var dbGreeting = dbRef.child("greeting");
// Get a reference to the "myname" section of our database
var dbUsername = dbRef.child("myname");

// Whenever our database reference is updated, show the data on our web page!
dbGreeting.on("value", function(dataSnapshot) { 
  messageBox.textContent = dataSnapshot.val(); 
  console.log( dataSnapshot.val() );
});

dbUsername.on("value", function(dataSnapshot) { 
  usernameBox.textContent = dataSnapshot.val(); 
  console.log( dataSnapshot.val() );
});

//create objects for your new paragraph and buttons.
var loginButton = document.getElementById("loginbtn");
var logoutButton = document.getElementById("logoutbtn");

loginButton.addEventListener("click", function (event) {
  console.log("User clicked LOGIN");
});

logoutButton.addEventListener("click", function (event) {
  console.log("User clicked LOGOUT");
});

// loginButton.onclick = function 

// window.addEventListener("click", logMouseEvent);

// function logMouseEvent (event) {
//   console.log(event);
// }
