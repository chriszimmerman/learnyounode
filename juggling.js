var args = process.argv;
var urls = args.slice(2);
var http = require('http');

var results = [];
for(var i = 0; i < urls.length; i++){
	var newUrlItem = {
		url: urls[i],
		finished: false,
		text: ""
	};

	results.push(newUrlItem);
}

for(var i = 0; i < results.length; i++){
	var result = results[i];
	http.get(result.url, function(response){
		response.setEncoding("utf8");

		response.on("data", function(data){
			result.text += data;
		});

		response.on("end", function(data){
			result.finished = true;
		
		//todo: responses doesn't seem visibile in the scope of the callback. investigate other ways of signaling when a get has been fully processed	
			var allResponsesSent = true;
			for(var j = 0; j < results.length; j++){
				if(!results[j].finished){
					allResponsesSent = false;
				}	
			}

			if(allResponsesSent){
				for(var j = 0; j < results.length; j++){
						console.log(results[j].text);
				}
			};
		});
	});
}
