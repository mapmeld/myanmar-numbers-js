function myanmarNumbers(str, toLanguage) {
  str += "";
  toLanguage = (toLanguage || "en").toLowerCase();

  var replaceNumbers = function (txt) {
    var numbers = {
      // Myanmar and Shan numbers
      "๐": 0, // Thai zero
      ဝ: 0, // Myanmar letter "wa" sometimes used as zero
      "၀": 0,
      "၁": 1,
      "၂": 2,
      "၃": 3,
      "၄": 4,
      "၅": 5,
      "၆": 6,
      "၇": 7,
      "၈": 8,
      "၉": 9,
      "႐": 0,
      "႑": 1,
      "႒": 2,
      "႓": 3,
      "႔": 4,
      "႕": 5,
      "႖": 6,
      "႗": 7,
      "႘": 8,
      "႙": 9,
      "\u{116D0}": 0,
      "\u{116D1}": 1,
      "\u{116D2}": 2,
      "\u{116D3}": 3,
      "\u{116D4}": 4,
      "\u{116D5}": 5,
      "\u{116D6}": 6,
      "\u{116D7}": 7,
      "\u{116D8}": 8,
      "\u{116D9}": 9,
      "\u{116DA}": 0,
      "\u{116DB}": 1,
      "\u{116DC}": 2,
      "\u{116DD}": 3,
      "\u{116DE}": 4,
      "\u{116DF}": 5,
      "\u{116E0}": 6,
      "\u{116E1}": 7,
      "\u{116E2}": 8,
      "\u{116E3}": 9,
    };

    var keys = Object.keys(numbers);
    if (toLanguage === "my") {
      // Myanmar
      for (var n = 2; n <= 11; n++) {
        var re = new RegExp(numbers[keys[n]] + "", "g");
        txt = txt.replace(re, keys[n]);
      }
    } else if (toLanguage === "shan") {
      // Shan numerals - convert any Myanmar numbers to international first
      var txt = myanmarNumbers(txt) + "";
      for (var n = 12; n < 22; n++) {
        var re = new RegExp(numbers[keys[n]] + "", "g");
        txt = txt.replace(re, keys[n]);
      }
    } else if (toLanguage === "pao") {
      // Pa’O numerals - convert any Myanmar numbers to international first
      var txt = myanmarNumbers(txt) + "";
      for (var n = 22; n < 32; n++) {
        var re = new RegExp(numbers[keys[n]] + "", "g");
        txt = txt.replace(re, keys[n]);
      }
    } else if (toLanguage === "pwo") {
      // Eastern Pwo numerals - convert any Myanmar numbers to international first
      var txt = myanmarNumbers(txt) + "";
      for (var n = 32; n < keys.length; n++) {
        var re = new RegExp(numbers[keys[n]] + "", "g");
        txt = txt.replace(re, keys[n]);
      }
    } else {
      for (var n = 0; n < keys.length; n++) {
        // default
        if (n === 1) {
          txt = txt.replace(/([၁၂၃၄၅၆၇၈၉])ဝ/g, "$10");
          txt = txt.replace(/ဝ([၁၂၃၄၅၆၇၈၉])/g, "0$1");
          while (txt.match(/ဝ(\d)/)) {
            txt = txt.replace(/ဝ(\d)/g, "0$1");
          }
          while (txt.match(/(\d)ဝ/)) {
            txt = txt.replace(/(\d)ဝ/g, "$10");
          }
        } else {
          var re = new RegExp(keys[n], "g");
          txt = txt.replace(re, numbers[keys[n]]);
        }
      }
    }
    return txt;
  };

  var getDateDivider = function (txt) {
    var dividers = [".", "/", "-"];
    for (var r = 0; r < dividers.length; r++) {
      var test = txt.split(dividers[r]);
      if (test.length === 3) {
        var day = test[0] * 1;
        var month = test[1] * 1;
        var year = test[2] * 1;
        if (
          day &&
          month &&
          year &&
          !isNaN(day) &&
          !isNaN(month) &&
          !isNaN(year)
        ) {
          if (day < 32 && month < 13 && year < 4000) {
            return dividers[r];
          }
        }
      }
    }
  };

  var numerals = replaceNumbers(str);
  if (isNaN(1 * numerals)) {
    // check for Date parsing
    if (
      (toLanguage === "my" ||
        toLanguage === "shan" ||
        toLanguage === "pao" ||
        toLanguage === "pwo") &&
      isNaN(1 * str)
    ) {
      try {
        var d = new Date(str);
        if (isNaN(d * 1)) {
          throw "invalid date";
        }
        // valid date - output numbers in this order and send for conversion
        return replaceNumbers(
          [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("."),
        );
      } catch (e) {
        // not a valid Date or a number - return formatted string
        return numerals;
      }
    } else {
      var dateDivider = getDateDivider(numerals);
      if (dateDivider) {
        var split = numerals.split(dateDivider);
        var rearranged = [split[1], split[0], split[2]].join(dateDivider);
        try {
          var d = new Date(rearranged);
          // valid date
          return d;
        } catch (e) {
          // not a valid Date or a number - return formatted String
          return numerals;
        }
      } else {
        // not a Date or a Number - return formatted String
        return numerals;
      }
    }
  } else {
    // return a Number
    return 1 * numerals;
  }
}

if (typeof module !== "undefined") {
  module.exports = myanmarNumbers;
}
