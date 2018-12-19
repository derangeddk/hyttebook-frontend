/**
 * This config is used to build vue components and test files when running
 * tests. It is *not* used in production (the nuxt pipeline is entirely responsible
 * for production).
 */

const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: './main.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, "..")
    },
    extensions: [ ".vue", ".js", ".mjs", ".json", ".wasm" ]
  },
  module: {
    rules: [
      {
        test: [ /\.vue$/, /components\/.+$/ ],
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin()
  ]
}

// test specific setups
module.exports.externals = [require('webpack-node-externals')()]
module.exports.devtool = 'eval'
