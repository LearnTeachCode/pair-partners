
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


var messageBox = document.getElementById("message");

var dbRef = firebase.database().ref().child("greeting");

dbRef.on("value", function(dataSnapshot) {
  messageBox.textContent = dataSnapshot.val();
});
