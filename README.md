# myanmar.numbers.js

[![Greenkeeper badge](https://badges.greenkeeper.io/mapmeld/myanmar-numbers-js.svg)](https://greenkeeper.io/)

Simple JavaScript library to convert between Myanmar/Burmese, Shan,
and Arabic numerals (0-9).

Does parsing to return Number and Date types when possible.

You may need to install fonts to see Myanmar and Shan numbers.

**Alternative to convert into Myanmar numerals: <a href="https://github.com/fraserxu/myanmar-numeral">myanmar-numeral</a> package from Fraser Xu.**

**Package to convert dates to traditional / Myanmar Civil Calendar coming soon.**

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

### Convert to Shan numerals
```javascript
myanmarNumbers(80, "shan");
> "႘႐"
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
