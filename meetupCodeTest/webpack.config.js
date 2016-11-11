var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
var config = {
  context: path.join(__dirname, 'src/js'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  inline: true,
  devtool: 'sourcemap',
  watch: true,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ],
  },
  plugins: [
      new ExtractTextPlugin('bundle.css', {
          allChunks: true
      })
  ],
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;
