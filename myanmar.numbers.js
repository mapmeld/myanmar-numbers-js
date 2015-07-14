function myanmarNumbers(str) {
  var replaceNumbers = function(txt) {
    var numbers = {
      // Myanmar numbers
      "๐": 0,
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
      "႙": 9
    };

    var keys = Object.keys(numbers);
    for (var n = 0; n < keys.length; n++) {
      var re = new RegExp(keys[n], "g");
      txt = txt.replace(re, numbers[keys[n]]);
    }
    return txt;
  };

  var getDateDivider = function(txt) {
    var dividers = [".","/","-"];
    for (var r = 0; r < dividers.length; r++) {
      var test = txt.split(dividers[r]);
      if (test.length === 3) {
        var day = test[0] * 1;
        var month = test[1] * 1;
        var year = test[2] * 1;
        if (day && month && year && !isNaN(day) && !isNaN(month) && !isNaN(year)) {
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
  } else {
    // return a Number
    return 1 * numerals;
  }
}

exports = exports || {};
exports.myanmarNumbers = myanmarNumbers;
