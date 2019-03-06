var database = [
  {
      username: "jason",
      password: "secret2"
  },
  {
    username: "sally",
    password: "321"
},
{
  username: "jill",
  password: "456"
},
]; 

var newsFeed = [
  {
    username: "Tony",
    timeline: "I'm tired from the weekend"
  },
  {
    username: "Jess",
    timeline: "No work today!"
  }
];

function isUserValid(username, password) {
  for (var i=0; i < database.length; i++) {
    if(database[i].username === username &&
        database[i].password === password) {
          return true;
        } 
    } return false; 
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
       console.log(newsFeed); 
     } else {
      alert("Sorry, wrong username and password!"); 
  }
}



var userNamePromt = prompt("What\'s your username?");
var passwordPromt = prompt("What\'s your password?");

signIn(userNamePromt, passwordPromt);