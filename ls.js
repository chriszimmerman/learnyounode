var commandLineArgs = process.argv;
var directoryPath = commandLineArgs[2];
var fileExtension = commandLineArgs[3];

var fs = require('fs');
var pathModule = require('path');

fs.readdir(directoryPath, function callback(err, list){
	for(var i = 0; i < list.length; i++){
		var file = list[i];	
		if(pathModule.extname(file).substring(1) === fileExtension){
			console.log(file);
		}
	};
});

