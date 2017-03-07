const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "css/styles.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: path.resolve(__dirname, 'dev'),
  entry: {
    app: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].compile.js',
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
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};

// Top directory shoudl be either resources or asset folder
  // Put all uncompiled files in this folder