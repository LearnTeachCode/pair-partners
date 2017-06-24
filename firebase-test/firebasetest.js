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
loginButton.addEventListener("click", function() {
  console.log("User clicked LOGIN"); 
  
  
        // Use Firebase with GitHub Auth to log in the user
      firebase.auth().signInWithRedirect(provider).catch(function(error) {
       // Log any errors to the console
       console.log(error);
      });
  
});


// When user clicks logout button:
logoutButton.addEventListener("click", function() {
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
        var username = user.email;
        var photoProfile = user.photoURL;
        console.log(username, photoProfile);
        console.log(user);
        var myStr = 'Hello, <strong> ';
        myStr += username;
        myStr += '</strong> Welcome! <img src="';
        myStr += photoProfile ;
        myStr += '" alt="GitHubProfilePic" style="width:150px;height:150px;">';

    document.getElementById("userinfo").innerHTML = myStr; //'Hello, <strong> '+ username + '</strong> Welcome! <img src="' + photoProfile + '" alt="GitHubProfilePic" style="width:200px;height:200px;">';
  // Otherwise, if no user currently logged in:
  } else {
  //   document.getElementById("userinfo").innerHTML = 'Goodbye, <strong> '+ username + '</strong> Have a nice day !': <img src="#">;
    console.log('User successfully logged OUT from Firebase!');

    // HERE: Update the paragraph with ID of "userinfo" to display the message "Not currently logged in."


  }
});