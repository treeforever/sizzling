const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

let config = {
  entry: './index.tsx',
  output: {
    filename: 'output.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
}

module.exports = config;