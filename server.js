var express= require("express");
var bodyParser= require("body-parser");
var path= require("path");
require("./app/routing/apiRoutes.js")

var PORT = process.env.port || 4000;




var app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
//getApiFriends();

// app.get("/",function(request,response){

		
// 	 response.sendFile(path.join(__dirname, "app/public/home.html"));
// 	 console.log(path.join(__dirname, "vs13index.html"));
// })



// app.get("/survey",function(request,response){

		
// 	 response.sendFile(path.join(__dirname, "app/public/survey.html"));
// 	 console.log(path.join(__dirname, "vs13index.html"));


// });

// app.get("/api/friends",function(request,response){

		
// 	 response.sendFile(path.join(__dirname, "app/public/survey.html"));
// 	 console.log(path.join(__dirname, "vs13index.html"));


// });
// app.get("/api/friends",function(request,response){

// 	//response.send("Ready to post friends!");
	 
// 	 //response.sendFile(path.join(__dirname, "../public/survey.html"));
// 	// console.log(path.join(__dirname, "vs13index.html"));
// 	//console.log("testing!");
// })


app.listen(PORT,function(){
	console.log("Listening on " + PORT);
	//console.log(path.join(__dirname, "index.html"))
})



//module.exports=(app);