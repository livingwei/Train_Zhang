describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should_return_1_when_input_1And10", function() {
    var a = fizzBuzz.seq(1, 10);
    expect(a[4]).toEqual('Buzz');
  });

  it("should_return_2_when_input_2And20", function() {
    var a = fizzBuzz.seq(2,20);
    expect(a[15]).toEqual(17);
  });
  it("should_return_Fizz_when_input_-3And30", function() {
    var a = fizzBuzz.seq(-3, 30);
    expect(a[30]).toEqual('Fizz');
  });
  it("should_return_Buzz_when_input_5And80", function() {
    var a = fizzBuzz.seq(5, 80);
    expect(a[60]).toEqual('Buzz');
  });
  it("should_return_FizzBuzz_when_input_15And100", function() {
    var a = fizzBuzz.seq(15, 100);
    expect(a[40]).toEqual('Buzz');
  });
});