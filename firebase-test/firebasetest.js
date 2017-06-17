// Initialize Firebase
var config = {
  apiKey: "AIzaSyBv6BMaXsgtYNmdyZZmZHTfh06bHwoF5pc",
  authDomain: "fir-test-546b1.firebaseapp.com",
  databaseURL: "https://fir-test-546b1.firebaseio.com",
  projectId: "fir-test-546b1",
  storageBucket: "fir-test-546b1.appspot.com",
  messagingSenderId: "194269179869"
};
firebase.initializeApp(config);

  // Create a JavaScript object for the HTML element that has id="message"
  var messageBox = document.getElementById("message");

  // Get a reference to the row of our database called "greeting"
  var dbRef = firebase.database().ref().child("Greeting");

  // Whenever our database reference is updated, show the data on our web page!
  dbRef.on("value", function(dataSnapshot) {
    messageBox.textContent = dataSnapshot.val();
  });