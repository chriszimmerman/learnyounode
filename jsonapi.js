var http = require('http');

var server = http.createServer(function(request, response){
	var url = require('url');
	var urlObject = url.parse(request.url, true);
	
	console.log(urlObject);
	if(urlObject.pathname === '/api/parsetime'){
		var iso = new Date(urlObject.query.iso);
		var json = {
			hour: iso.getHours(),
			minute: iso.getMinutes(),
			second: iso.getSeconds() 
		};
	}
	else if(urlObject.pathname === '/api/unixtime'){
		var time = new Date(urlObject.query.iso);
		var json = {
			unixtime: time.getTime()
		};
	}

	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.write(JSON.stringify(json));
	request.pipe(response);
});

var port = process.argv[2];
server.listen(port);
