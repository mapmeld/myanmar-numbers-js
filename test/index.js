var assert = require("assert");
var myanmarNumbers = require("../myanmar.numbers");

describe("Numbers:", function() {
  describe("to Arabic numerals:", function() {
    it("should return 10 when the value is ၁၀", function() {
      var ret = myanmarNumbers("၁၀");
      assert.equal(ret, 10);
      assert.equal((typeof ret), "number");
    });

    it("should return 10 when the value is ၁ဝ (using wa letter as zero)", function() {
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
    it("should return ၉၀ when the value is 90", function() {
      var ret = myanmarNumbers(90, "my");
      assert.equal(ret, "၉၀");
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
  it("should return '202 Sesame' when the value is '၂၀၂ Sesame'", function() {
    var ret = myanmarNumbers("၂၀၂ Sesame");
    assert.equal(ret, "202 Sesame");
  });

  it("should return '202 Sesame' when the value is '၂ဝ၂ Sesame' (using wa letter)", function() {
    var ret = myanmarNumbers("၂ဝ၂ Sesame");
    assert.equal(ret, "202 Sesame");
  });

  it("should return '330 Sesame' when the value is '၃၃ဝ Sesame' (using wa letter)", function() {
    var ret = myanmarNumbers("၃၃ဝ Sesame");
    assert.equal(ret, "330 Sesame");
  });

  it("should return '03 Sesame' when the value is 'ဝ၃ Sesame' (using wa letter)", function() {
    var ret = myanmarNumbers("ဝ၃ Sesame");
    assert.equal(ret, "03 Sesame");
  });

  it("should return '007 Sesame' when the value is 'ဝဝ၇ Sesame' (using wa letter)", function() {
    var ret = myanmarNumbers("ဝဝ၇ Sesame");
    assert.equal(ret, "007 Sesame");
  });

  it("should return 'tဝ' when the value is 'tဝ' (wa is not zero)", function() {
    var ret = myanmarNumbers("tဝ");
    assert.equal(ret, "tဝ");
  });
});

describe("Dates:", function() {
  it("should return 2 April 2010 when the value is '၂.၄.၂၀၁၀'", function() {
    var ret = myanmarNumbers("၂.၄.၂၀၁၀");
    var target = new Date("April 2, 2010");
    assert.equal(ret + "", target + "");
    assert.equal((typeof ret), "object");
  });

  it("should return '၂.၄.၂၀၁၀' when the value is 2 April 2010", function() {
    var ret = myanmarNumbers(new Date("April 2, 2010"), "my");
    assert.equal(ret, "၂.၄.၂၀၁၀");
  });
});
