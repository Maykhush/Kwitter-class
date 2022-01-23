const firebaseConfig = {
    apiKey: "AIzaSyBlR_NB9MUH3-VQcJwONtYq3s9iRle8LAE",
    authDomain: "kwitter-projectin.firebaseapp.com",
    projectId: "kwitter-projectin",
    storageBucket: "kwitter-projectin.appspot.com",
    messagingSenderId: "296216402996",
    appId: "1:296216402996:web:7fff8c0586ea432f4ebe61",
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
    
}