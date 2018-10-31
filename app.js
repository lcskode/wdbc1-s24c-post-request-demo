var express = require("express");
var app = express();

app.set("view engine", "ejs");


// ============================================================================
// ROUTES
// ============================================================================

// root ROUTE
app.get("/", function(req, res){
  res.render("home");
});

// friends ROUTE - displays list of friends
app.get("/friends", function(req, res){
  // create dummy array of friends
  var friendsArr = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
  // pass friends array 
  res.render("friends", {friends: friendsArr});
});

// post ROUTE - adds or  sends data to be added or to be used somehow on the server side 
app.post("/addFriend", function(req, res){
  // Test
  res.send("You have reached the POST ROUTE!");
});

// ============================================================================
// SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Server started...");
});
