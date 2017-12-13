const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/, // files ending with .js
            exclude: /node_modules/, // exclude the node_modules directory
            loader: "babel-loader" // use this (babel-core) loader
          },
          {
            test: /\.scss$/, // files ending with .scss
            use: ExtractTextWebpackPlugin.extract({
              use: ['css-loader', 'sass-loader'], // use these loaders
              fallback: 'style-loader' // fallback for any CSS not extracted
            }) // end extract
          }
        ] // end rules
    },
    plugins: [
      new ExtractTextWebpackPlugin('styles.css') //call the ExtractionTextWebpackPlugin constructor
    ]
}

module.exports = config;