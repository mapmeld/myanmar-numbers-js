# myanmar.numbers.js

Simple JavaScript library to convert Myanmar/Burmese and Shan numerals into
Arabic numerals (0-9).

Does some parsing to return Numbers and Dates when possible.

You may need special fonts to see Myanmar and Shan numbers.

**To convert into Myanmar, use the <a href="https://github.com/fraserxu/myanmar-numeral">myanmar-numeral</a> package from Fraser Xu.**

## Usage

```javascript
myanmarNumbers("၈၀");
> 80

myanmarNumbers("၅၂ West Road");
> "52 West Road"

myanmarNumbers("၂.၄.၂၀၁၀");
> Fri Apr 02 2010 00:00:00
```

## Node.js

```bash
npm install myanmar-numbers
```

```
var myanmarNumbers = require("myanmar-numbers").myanmarNumbers;
myanmarNumbers("၅၂ West Road");
```

## License

MIT License
