
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnuHGT34ttHnWVpggi_ZelpUgjWYnFlEU",
    authDomain: "cool-things-666fa.firebaseapp.com",
    databaseURL: "https://cool-things-666fa.firebaseio.com",
    projectId: "cool-things-666fa",
    storageBucket: "cool-things-666fa.appspot.com",
    messagingSenderId: "1038438303212"
  };

firebase.initializeApp(config);


var userNamebox = document.getElementById("username");
var messageBox =document.getElementById("message")

var dbRef = firebase.database().ref();
var dbGreeting = dbRef.child("greeting");
var dbUsername = dbRef.child("myname");

dbGreeting.on("value", function(dataSnapshot) {
  messageBox.textContent = dataSnapshot.val();
  console.log(dataSnapshot.val() );
});
dbUsername.on("value", function(dataSnapshot) {
  userNamebox.textContent = dataSnapshot.val();
  console.log(dataSnapshot.val() );
});
