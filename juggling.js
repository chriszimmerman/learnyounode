var args = process.argv;
var urls = args.slice(2);
var http = require('http');

var results = [];

var finished = 0;

var printResults = function(){
		for(var j = 0; j < results.length; j++){
			console.log(results[j]);
		}
};

var setupGet = function(i){
	http.get(urls[i], function(response){
		response.setEncoding("utf8");

		results[i] = "";
		response.on("data", function(data){
			results[i] += data;
		});

		response.on("end", function(data){
			finished++;	
			if(finished === 3) {
				printResults();
			}
		});
	});
};

for(var i = 0; i < urls.length; i++){
	setupGet(i);
}
