


  // Initialize Firebase
  var config = {
  apiKey: "AIzaSyBnObezf2P7C8CCHs7lxlY4wR41pnoaYzw",
  authDomain: "eric-s-project-1.firebaseapp.com",
  databaseURL: "https://eric-s-project-1.firebaseio.com",
  projectId: "eric-s-project-1",
  storageBucket: "eric-s-project-1.appspot.com",
  messagingSenderId: "755258963048"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var person = {
    names:["Polar Express","Hogwarts Express","Big Train","Thomas","Fast Train"],
    destinations:["North Pole","Hogwarts","Alaska","Florida","St. Paul"],
    firsttrain: ["05:00","04:30","07:15","04:15","06:00"],
    frequencies: [15,20,25,19,30]
};

function nextTrain(start,freq){
    console.log(moment(person.firsttrain[0], "hh:mm"));
}



$(document).ready(function() {
    nextTrain();

});