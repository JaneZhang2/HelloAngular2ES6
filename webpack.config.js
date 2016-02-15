'use strict';
let path = require('path'),
  webpack = require('webpack'),
  HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    vendor: './vendor',
    bundle: './app'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[id].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015'],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'raw?minimize=false'
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    stats: 'errors-only',
    port: 9000
  },
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new HtmlwebpackPlugin({
      template: './index.html'
    })
  ]
};