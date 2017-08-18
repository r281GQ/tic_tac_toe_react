const path = require('path');
const extract = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
    bundle: './frontend/src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader']
      },
      {
        use: extract.extract({
          use: ['css-loader', 'sass-loader']
        }),
        test: /\.(css|scss)$/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new extract('style.css'),
    new HtmlWebpackPlugin({
      template: 'frontend/src/index.html'
    })
  ]
};

module.exports = config;
