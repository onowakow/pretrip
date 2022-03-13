const path = require('path');

module.exports = {
  entry: [
    'regenerator-runtime/runtime.js',
    './public/javascripts/src/index.js',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public/javascripts/dist'),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};
