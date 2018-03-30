

var friendsData= require("../data/friends.js")

module.exports=function (app){
app.get("/api/friends",function(request,response){

	response.send(friendsData);
	 
	
	console.log("friendsData!");
})




app.post("/api/friends",function(request,response){

	friendsData.push(request.body);
	response.send(friendsData);

});

}
