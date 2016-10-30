const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(), 
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrowserSyncPlugin({
        server: { baseDir: ['./dist'] }
    }), 
  ] 
}
