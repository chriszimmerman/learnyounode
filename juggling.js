var args = process.argv;
var urls = args.slice(2);
var http = require('http');

var results = [];
var finished = 0;

var printResults = function(){
		for(var i = 0; i < results.length; i++){
			console.log(results[i]);
		}
};

var setupGet = function(currentUrl){
	http.get(urls[currentUrl], function(response){
		response.setEncoding("utf8");

		results[currentUrl] = "";
		response.on("data", function(data){
			results[currentUrl] += data;
		});

		response.on("end", function(data){
			finished++;	
			if(finished === urls.length) {
				printResults();
			}
		});
	});
};

for(var i = 0; i < urls.length; i++){
	setupGet(i);
}
