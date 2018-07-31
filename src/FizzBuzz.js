function FizzBuzz(){}

FizzBuzz.prototype.seq = function(num, endNum){
	var newsArray = []
	for (var i = num; i <= endNum; i++) {
		newsArray.push(i);
		if (i % 15 == 0){
			newsArray.pop(newsArray[i]);
			newsArray.push('FizzBuzz');
		}else if (i % 3 == 0 ){
			newsArray.pop(newsArray[i]);
			newsArray.push('Fizz');
		}else if (i % 5 === 0){
			newsArray.pop(newsArray[i]);
			newsArray.push('Buzz');
		}else{
		newsArray.push(i);

		}
		
	}
	return newsArray
}