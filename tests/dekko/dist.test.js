const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('antd-with-locales.js')
  .hasFile('antd-with-locales.min.js')
  .hasFile('antd2.css')
  // .hasFile('antd2.min.css')
  .hasFile('antd2.js')
  // .hasFile('antd2.min.js')
  .hasFile('antd.less')
  .hasFile('antd.dark.less')
  .hasFile('antd2.dark2.css')
  .hasFile('antd.compact.less')
  .hasFile('antd.compact.css')
  .hasFile('dark-theme.js');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
