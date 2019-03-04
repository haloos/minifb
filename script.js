var database = [
  {
      username: "jason",
      password: "secret2"
  }
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

var userNamePromt = prompt("What's your username?");
var passwordPromt = prompt("What's your password?");

function signIn(user, pass) {
 if (user === database[0].username && 
    pass === database[0].password) {
      console.log(newsfeed); 
    } else {
      alert("Sorry, wrong username and password!"); 
    }
}

signIn(userNamePromt, passwordPromt);