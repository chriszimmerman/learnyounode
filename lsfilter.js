var commandLineArgs = process.argv;
var directoryPath = commandLineArgs[2];
var fileExtension = commandLineArgs[3];

var mymodule = require('./lsmodule.js');

mymodule(directoryPath, fileExtension, function(err, data){
	if(err){
		return;
	}
	else {
		for(var i = 0; i < data.length; i++){
			console.log(data[i]);
		}
	}
});
