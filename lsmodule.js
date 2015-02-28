module.exports = function(directoryPath, fileExtension, callback) {
	var fsModule = require('fs');
	var pathModule = require('path');

	return fsModule.readdir(directoryPath, function(err, list) {
		if(err){
			return callback(err);
		}
		else{
			var files = [];
			for(var i = 0; i < list.length; i++){
				var file = list[i];	
				if(pathModule.extname(file).substring(1) === fileExtension){
					files.push(file);
				}
			}
			callback(null, files);
		}
	});
};
