const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{?(m)js,ts?(x)}': [buildEslintCommand],
  '*.{css,?(m)js,ts?(x),json,y?(a)ml,md?(x)}': 'prettier -w',
};
