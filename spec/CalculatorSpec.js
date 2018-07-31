describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });
  it("should_return_2_when_input_1plus1", function() {
    var spec = calculator.seq(1, 1, 'plus');
    expect(spec).toEqual(2);
  });
  it("should_return_no_when_input_1plusRes1", function() {
    var spec = calculator.seq(1, -1, 'plus');
    expect(spec).toEqual('not find');
  });

  it("should_return_90_when_input_100subtract10", function() {
    var spec = calculator.seq(100, 10, 'subtract');
    expect(spec).toEqual(90);
  });
  it("should_return_90_when_input_100subtract10", function() {
    var spec = calculator.seq(5, 10, 'subtract');
    expect(spec).toEqual('数据超限');
  });
  it("should_return_10_when_input_88multiply10", function() {
    var spec = calculator.seq(88, 10, 'multiply');
    expect(spec).toEqual(880);
  });
  it("should_return_10_when_input_12divide2", function() {
    var spec = calculator.seq(12, 2, 'divide');
    expect(spec).toEqual(6);
  });
  it("should_return_10_when_input_1.2divide0.2", function() {
    var spec = calculator.seq(1.2, 0.2, 'divide');
    expect(spec).toEqual(6);
  });
});