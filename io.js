var commandLineArgs = process.argv;
var filepath = commandLineArgs[2];

var fs = require('fs');
var fileContents = fs.readFileSync(filepath);

var fileContentsAsString = fileContents.toString();
var lines = fileContentsAsString.split('\n');
var numberOfLines = lines.length - 1;

console.log(numberOfLines);
