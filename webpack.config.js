var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/assets');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  mode: 'development',
  entry: ['babel-polyfill', APP_DIR + '/app.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react','stage-2']
          }
        }
      }
    ]
  }
};

module.exports = config;