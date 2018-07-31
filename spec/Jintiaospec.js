describe("Gold", function() {
  var gold;

  beforeEach(function() {
    gold = new Gold();
  });
  it("should_return_10m_when_input_1mAnd10m", function() {
    var a = gold.test(1, 10, 'm', 'm');
    expect(a).toEqual('10m');
  });
  it("should_return_超出测试范围_when_input_1mAnd10km", function() {
    var a = gold.test(1, 10, 'm', 'km');
    expect(a).toEqual('超出测试范围');
  });
  it("should_return_1m_when_input_1mAnd10cm", function() {
    var a = gold.test(1, 10, 'm', 'cm');
    expect(a).toEqual('1m');
  });
  it("should_return_100dm_when_input_1mAnd100dm", function() {
    var a = gold.test(1, 100, 'm', 'dm');
    expect(a).toEqual('100dm');
  });
  it("should_return_1m_when_input_10cmAnd1m", function() {
    var a = gold.test(10, 1, 'cm', 'm');
    expect(a).toEqual('1m');
  });
  it("should_return_10m_when_input_10cmAnd10dm", function() {
    var a = gold.test(10, 10, 'cm', 'dm');
    expect(a).toEqual('10dm');
  });

  it("should_return_30cm_when_input_1dmAnd30cm", function() {
    var a = gold.test(1, 30, 'dm', 'cm');
    expect(a).toEqual('30cm');
  });
  it("should_return_30m_Fizz_when_input_3dmAnd30m", function() {
    var a = gold.test(3, 30, 'dm', 'm');
    expect(a).toEqual('30m');
  });
  it("should_return_30m_Fizz_when_input_3And30m", function() {
    var a = gold.test(3, 30, '', 'm');
    expect(a).toEqual('超出测试范围');
  });
  it("should_return_30dm_Fizz_when_input_3dmAnd30dm", function() {
    var a = gold.test(3, 30, 'dm', 'dm');
    expect(a).toEqual('30dm');3
  });
});