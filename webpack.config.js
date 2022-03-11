const path = require('path');

module.exports = {
  entry: './public/javascripts/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public/javascripts/dist'),
  },
  mode: 'development',
};
