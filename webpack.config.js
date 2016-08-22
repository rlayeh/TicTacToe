var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/js');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        include : APP_DIR,
        loaders : ['babel']
      }
    ]
  }
};

module.exports = config;