var port = process.argv[2];
var filepath = process.argv[3];

var http = require('http');
var server = http.createServer(function(request, response){
	var fs = require('fs');
	var fileToStream = fs.createReadStream(filepath);
	fileToStream.pipe(response);
});
server.listen(port);
