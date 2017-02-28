var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './public'),
  entry: {
    app: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].compile.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
        exclude: [/node_modules/]
      },
    ]
  }
};