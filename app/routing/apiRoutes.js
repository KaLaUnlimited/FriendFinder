

// var app = require("../../server.js");
// var path= require("path");


// //logic
// // "get/api/friends"

module.exports=function (app){
app.get("/api/friends",function(request,response){

	response.send("Ready to post friends!");
	 
	 //response.sendFile(path.join(__dirname, "../public/survey.html"));
	// console.log(path.join(__dirname, "vs13index.html"));
	console.log("testing!");
})


}



 //module.exports=getAPIFriends();

// // post

// /api/friends