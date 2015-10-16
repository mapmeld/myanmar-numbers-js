var assert = require("assert");
var myanmarNumbers = require("../myanmar.numbers");

describe("Numbers:", function() {
  describe("to Arabic numerals:", function() {
    it("should return 10 when the value is ၁၀", function() {
      var ret = myanmarNumbers("၁၀");
      assert.equal(ret, 10);
      assert.equal((typeof ret), "number");
    });

    it("should return 10 when the value is ၁ဝ", function() {
      var ret = myanmarNumbers("၁ဝ");
      assert.equal(ret, 10);
      assert.equal((typeof ret), "number");
    });

    it("should parse all Myanmar digits", function() {
      var ret = myanmarNumbers("၁၂၃၄၅၆၇၈၉၀");
      assert.equal(ret, 1234567890);
      assert.equal((typeof ret), "number");
    });

    it("should parse all Shan digits", function() {
      var ret = myanmarNumbers("႑႒႓႔႕႖႗႘႙႐");
      assert.equal(ret, 1234567890);
      assert.equal((typeof ret), "number");
    });
  });

  describe("to Myanmar numerals:", function() {
    it("should return ၉ဝ when the value is 90", function() {
      var ret = myanmarNumbers(90, "my");
      assert.equal(ret, "၉ဝ");
    });
  });

  describe("to Shan numerals:", function() {
    it("should return ၁ဝ when the value is 10", function() {
      var ret = myanmarNumbers(10, "shan");
      assert.equal(ret, "႑႐");
    });
  });
});

describe("Strings:", function() {
  it("should return '10 Sesame' when the value is ၁၀ Sesame", function() {
    var ret = myanmarNumbers("၁၀ Sesame");
    assert.equal(ret, "10 Sesame");
    assert.equal((typeof ret), "string");
  });
});

describe("Dates:", function() {
  it("should return 2 April 2010 when the value is '၂.၄.၂၀၁၀'", function() {
    var ret = myanmarNumbers("၂.၄.၂၀၁၀");
    var target = new Date("April 2, 2010");
    assert.equal(ret + "", target + "");
    assert.equal((typeof ret), "object");
  });

  it("should return '၂.၄.၂ဝ၁ဝ' when the value is 2 April 2010", function() {
    var ret = myanmarNumbers(new Date("April 2, 2010"), "my");
    assert.equal(ret, "၂.၄.၂ဝ၁ဝ");
  });
});
