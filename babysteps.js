var args = process.argv;
var numbers = args.slice(2);
var total = 0;
for(var i = 0; i < numbers.length; i++){
	total += Number(numbers[i]);	
};

console.log(total);
