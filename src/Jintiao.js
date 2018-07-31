function Gold(){}

Gold.prototype.test = function(numFirst, endSecond, operatorFirst, operatorSecond){
	if (operatorFirst === operatorSecond) {
		if (numFirst > endSecond) {
			return numFirst + operatorFirst
		} else {
			return endSecond + operatorSecond
		}
	} else if (operatorFirst === 'dm' && operatorSecond === 'cm' || operatorFirst === 'm' && operatorSecond === 'dm') {
		if (numFirst * 10 > endSecond) {
			return numFirst + operatorFirst
		} else {
			return endSecond + operatorSecond
		}
	} else if (operatorFirst === 'cm' && operatorSecond === 'dm' || operatorFirst === 'dm' && operatorSecond === 'm') {
		if (numFirst > endSecond * 10) {
			return numFirst + operatorFirst
		} else {
			return endSecond + operatorSecond
		}
	} else if (operatorFirst === 'cm' && operatorSecond === 'm') {
		if (numFirst > endSecond * 100) {
			return numFirst + operatorFirst
		} else {
			return endSecond + operatorSecond
		}
	} else if (operatorFirst === 'm' && operatorSecond === 'cm') {
		if (numFirst * 100 > endSecond) {
			return numFirst + operatorFirst
		} else {
			return endSecond + operatorSecond
		}
	} else {
		return '3'
	}
}