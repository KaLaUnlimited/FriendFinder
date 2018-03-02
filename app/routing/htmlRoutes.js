
var app = require("../../server.js");
var path= require("path");

//console.log(app);
//server.app=express();

//var app = server.express();


// app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.json());

app.get("/",function(request,response){

		
	 response.sendFile(path.join(__dirname, "../public/home.html"));
	 console.log(path.join(__dirname, "vs13index.html"));
})

// var app = express();


// app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.json());
// $("button").click(function(){

app.get("/survey",function(request,response){

		
	 response.sendFile(path.join(__dirname, "../public/survey.html"));
	 console.log(path.join(__dirname, "vs13index.html"));
})
// })
// app.listen(PORT,function(){
// 	console.log("Listening on " + PORT);
// 	//console.log(path.join(__dirname, "index.html"))
// })