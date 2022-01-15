const zipdir = require('zip-dir');
const {
  existsSync,
  mkdirSync
} = require('fs');
const path = require('path');

const config = require('./config');

const DIST_ROOT = path.resolve(__dirname, '../dist');

config.forEach(({
  name,
  input,
  output,
  errMessage,
  successMessage
}) => {
  if (!existsSync(DIST_ROOT)) {
    mkdirSync(DIST_ROOT, { recursive: true }, (err) => {
      if (err) {
        console.log('dist 目录创建失败');
        throw err;
      }
    });
  }
  
  zipdir(input, {
    saveTo: output
  }, (err) => {
    if (err) {
      console.log(errMessage || `[${name}]压缩失败`);
      console.log(err);
    } else {
      console.log(successMessage || `[${name}]压缩成功`);
    }
  });
});
