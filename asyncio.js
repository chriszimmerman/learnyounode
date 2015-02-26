var commandLineArgs = process.argv;
var filepath = commandLineArgs[2];
var fileContentsAsString;

var callback = function(err, data){
	fileContentsAsString = data.toString();
	var lines = fileContentsAsString.split('\n');
	var numberOfLines = lines.length - 1;

	console.log(numberOfLines);
};

var fs = require('fs');
var fileContents = fs.readFile(filepath, callback);

