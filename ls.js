var commandLineArgs = process.argv;
var directoryPath = commandLineArgs[2];
var fileExtension = commandLineArgs[3];

var fs = require('fs');
var pathModule = require('path');

var files;

fs.readdir(directoryPath, function callback(err, list){
	files = list;
	for(var file in files){
		if(pathModule.extname(file).substring(1) === fileExtension){
			console.log(file);
		}
	};
});

