// Initialize Firebase
 var config = {
   apiKey: "AIzaSyCURkSNkiFsXyD9A3VF4da2rs-MsHeMbjE",
   authDomain: "fir-test-cd2a4.firebaseapp.com",
   databaseURL: "https://fir-test-cd2a4.firebaseio.com",
   projectId: "fir-test-cd2a4",
   storageBucket: "fir-test-cd2a4.appspot.com",
   messagingSenderId: "382326280146"
 };

 firebase.initializeApp(config);

 var messageBox = document.getElementById("message");
 var usernameBox = document.getElementById("username");

 var dbRef = firebase.database().ref();
 var dbGreeting = dbRef.child("greeting");
 var dbUsername = dbRef.child("myname");

 dbGreeting.on("value", function(dataSnapshot) {
	messageBox.textContent = dataSnapshot.val();
    console.log( dataSnapshot.val());

});

dbUsername.on("value", function(dataSnapshot) {
  usernameBox.textContent = dataSnapshot.val();
  console.log( dataSnapshot.val());

});
