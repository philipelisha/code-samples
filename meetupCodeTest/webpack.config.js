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
  watch: true,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
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
