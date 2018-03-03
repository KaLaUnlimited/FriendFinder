

var friendsData= require("../data/friends.js")

module.exports=function (app){
app.get("/api/friends",function(request,response){

	response.send(friendsData);
	 
	 //response.sendFile(path.join(__dirname, "../public/survey.html"));
	// console.log(path.join(__dirname, "vs13index.html"));
	console.log("testing!");
})




app.post("/api/friends",function(request,response){

	friendsData.push(request.body);

});

}

 //module.exports=getAPIFriends();

// // post

// /api/friends