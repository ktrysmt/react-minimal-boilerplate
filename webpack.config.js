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
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'presets': [
                'env',
                'react'
              ],
              'plugins': [
                'transform-class-properties'
              ]
            }
          }
        ]
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrowserSyncPlugin({
        server: { baseDir: ['./dist'] }
    }),
  ]
}
