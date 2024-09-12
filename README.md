# myanmar.numbers.js

Simple JavaScript library to convert between Myanmar/Burmese, Shan, Pa’O, Eastern Pwo,
and Arabic numerals (0-9).

Does parsing to return Number and Date types when possible.

You may need to install fonts to see these numbers.

Credit to [Ben Mitchell](https://x.com/OhBendy/status/1833643552145854551) for info about numerals added in Unicode 16.0

**Alternative to convert into Myanmar numerals: <a href="https://github.com/fraserxu/myanmar-numeral">myanmar-numeral</a> package from Fraser Xu.**

**Package to convert dates to traditional / Myanmar Civil Calendar**
https://github.com/yan9a/mmcal (has some errors re: leap years)

## Usage

### Convert to Arabic numerals

```javascript
myanmarNumbers("၈၀");
> 80

myanmarNumbers("၅၂ West Road");
> "52 West Road"

myanmarNumbers("၂.၄.၂၀၁၀");
> Fri Apr 02 2010 00:00:00
```

### Convert to Myanmar numerals

```javascript
myanmarNumbers(80, "my");
> "၈ဝ"

myanmarNumbers("52 West Road", "my");
> "၅၂ West Road"

myanmarNumbers(new Date("April 2, 2010"), "my");
> "၂.၄.၂ဝ၁ဝ"
```

### Convert to other numerals
```javascript
myanmarNumbers(80, "shan");
> "႘႐"

myanmarNumbers(80, "pao");

myanmarNumbers(80, "pwo");
```

## Node.js

```bash
npm install myanmar-numbers
```

```
var myanmarNumbers = require("myanmar-numbers");
myanmarNumbers("၅၂ West Road");
```

## License

MIT License
