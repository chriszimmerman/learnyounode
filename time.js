var port = process.argv[2];
var net = require('net');

var server = net.createServer(function(socket){
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	var fullMonth = month < 10 ? "0" + month : month; 
	var fullDate = day < 10 ? "0" + day : day; 
	var fullHours = hours < 10 ? "0" + hours : hours;
	var fullMinutes = minutes < 10 ? "0" + minutes : minutes;	
	var time = date.getFullYear() + "-" + fullMonth + "-" + fullDate + " " + fullHours + ":" + fullMinutes;
	socket.end(time);
});
server.listen(Number(port));
