const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('zhytang-with-locales.js')
  .hasFile('zhytang-with-locales.min.js')
  .hasFile('zhytang.css')
  .hasFile('zhytang.min.css')
  .hasFile('zhytang.js')
  .hasFile('zhytang.min.js')
  .hasFile('antd.less')
  .hasFile('antd.dark.less')
  .hasFile('zhytang.dark.css')
  .hasFile('antd.compact.less')
  .hasFile('zhytang.compact.css')
  .hasFile('dark-theme.js');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
