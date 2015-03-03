var args = process.argv;
var url = args[2];
var http = require('http');

var results = "";

http.get(url, function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		results += data;
	});
	response.on("end", function(data){
		console.log(results.length);
		console.log(results);
	});
});
