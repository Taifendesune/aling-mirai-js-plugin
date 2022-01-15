const path = require('path');

const PLUGIN_ROOT = path.resolve(__dirname, '../plugins');
const DIST_ROOT = path.resolve(__dirname, '../dist');

module.exports = [
  {
    name: 'chat-plugin',
    input: `${PLUGIN_ROOT}/chat-plugin`,
    output: `${DIST_ROOT}/chat-plugin.zip`
  }
];
