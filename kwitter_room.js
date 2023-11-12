
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDVPje-qd2EBFEOGtFgaQMYt8aKtL8rIkI",
  authDomain: "lets-chat-web-app-9b3ab.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-9b3ab-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-9b3ab",
  storageBucket: "lets-chat-web-app-9b3ab.appspot.com",
  messagingSenderId: "295381875616",
  appId: "1:295381875616:web:aea8c6b28cc6b9a71782c5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
