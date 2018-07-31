describe("ParkingLot", function() {
  var parkingLot;

  beforeEach(function() {
    parkingLot = new ParkingLot();
  });
  it("should_return_车位已满_when_input_1Stop30", function() {
    var a = parkingLot.paking('a', '', 1, 305);
    expect(a).toEqual('车位已满');
  });
  it("should_return_可停车_when_input_1Stop10", function() {
    var a = parkingLot.paking('a', '', 1, 10);
    expect(a).toEqual([ 11, 'aCar' ]);
  });
  it("should_return_可停车_when_input_1Drew10", function() {
    var a = parkingLot.paking('b', 'aCar', 0, 10);
    expect(a).toEqual('这不是你的车');
  });
  it("should_return_可停车_when_input_1Stop10", function() {
    var a = parkingLot.paking('b', 'bCar', 0, 10);
    expect(a).toEqual(9);
  });
});