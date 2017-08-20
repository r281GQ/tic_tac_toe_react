const path = require('path');
const extract = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const vendor = [
  'lodash',
  'material-ui',
  'react',
  'react-dom',
  'react-redux',
  'react-tap-event-plugin',
  'redux',
  'redux-devtools-extension',
  'redux-thunk'
];

const config = {
  entry: {
    bundle: ['babel-polyfill', './frontend/src/index.jsx'],
    vendor
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
    }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] })
  ]
};

module.exports = config;
