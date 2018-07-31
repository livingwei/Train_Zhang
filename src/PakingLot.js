function ParkingLot(){}
var Total = 200;
ParkingLot.prototype.paking = function(a, aCar, type, CarCount){
	// if (type === 1) {
		// if (CarCount >= Total) {
		// 	return '车位已满'
		// } else {
		// 	return ++CarCount
		// }
		// return CarCount >= Total ? '车位已满' : ++CarCount
	// }
	switch (type) {
		case 1:
		return CarCount >= Total ? '车位已满' : [++CarCount, a + 'Car']
		break
		case 0:
		return aCar === a + 'Car' ? --CarCount : '这不是你的车'
		break
	} 
	// return type === 1 ？ (CarCount >= Total ? '车位已满' : ++CarCount) : (aCar === a + 'Car' ? --CarCount : '这不是你的车')
}