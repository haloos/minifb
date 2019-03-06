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

function signIn(username, password) {
  for (var i=0; i < database.length; i++) {
      if(database[i].username === username &&
          database[i].password === password) {
            console.log(newsfeed);
          } else {
            alert("Sorry, wrong username and password");
          }
  }
 
  // if (user === database[0].username && 
  //   pass === database[0].password) {
  //     console.log(newsfeed); 
  //   } else {
  //     alert("Sorry, wrong username and password!"); 
    }
// }

var userNamePromt = prompt("What\'s your username?");
var passwordPromt = prompt("What\'s your password?");

signIn(userNamePromt, passwordPromt);