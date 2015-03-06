var port = process.argv[2];
var net = require('net');

var server = net.createServer(function(socket){
	var addTrailingZero = function(number){
		return number < 10 ? "0" + number : number;
	};

	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	var time = date.getFullYear() + "-" + addTrailingZero(month) + "-" + addTrailingZero(day) + " " + addTrailingZero(hours) + ":" + addTrailingZero(minutes);
	socket.end(time);
});
server.listen(Number(port));
