const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('antd2-with-locales.js')
  .hasFile('antd2-with-locales.min.js')
  .hasFile('antd2.css')
  .hasFile('antd2.min.css')
  .hasFile('antd2.js')
  .hasFile('antd2.min.js')
  .hasFile('antd2.less')
  .hasFile('antd2.dark.less')
  .hasFile('antd2.dark.css')
  .hasFile('antd2.compact.less')
  .hasFile('antd2.compact.css')
  .hasFile('dark-theme.js');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
