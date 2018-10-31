var express = require("express");
var app = express();

// extracts data added to req.body object through a form 
var bodyParser = require("body-parser");

// instruct app to use body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// create dummy array of friends
var friendsArr = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

// ============================================================================
// ROUTES
// ============================================================================

// root ROUTE
app.get("/", function(req, res){
  res.render("home");
});

// friends ROUTE - displays list of friends
app.get("/friends", function(req, res){
  
  // pass friends array 
  res.render("friends", {friends: friendsArr});
});

// post ROUTE - adds or  sends data to be added or to be used somehow on the server side 
app.post("/addFriend", function(req, res){
  // req.body - an object that contains all data from the request body
  // displays new friend added from friends.ejs via the form element 
  // console.log(req.body.newFriend);

  var newFriend = req.body.newFriend;
  friendsArr.push(newFriend);

  // Test
  // res.send("You have reached the POST ROUTE!");
  
  // redirects to friends ROUTE after adding new friend to friendsArr array
  res.redirect("/friends");
});

// ============================================================================
// SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Server started...");
});
