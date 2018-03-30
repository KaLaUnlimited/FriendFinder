var express= require("express");
var bodyParser= require("body-parser");
var path= require("path");

var app = express();
require("./app/routing/apiRoutes.js")(app);
 require("./app/routing/htmlRoutes.js")(app);



var PORT = process.env.port || 4000;







app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static("public"));



app.listen(PORT,function(){
	console.log("Listening on " + PORT);
	
})



//module.exports=(app);