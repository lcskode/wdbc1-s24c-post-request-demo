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

// ============================================================================
// SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Server started...");
});
