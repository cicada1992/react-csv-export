'use strict';

/******************************************************************************

  This is the main Webpack configuration.

 *****************************************************************************/

const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

/**
 * I/O
 */
const SRC_DIR = path.join(__dirname, 'src'),
  DIST_DIR = path.join(__dirname, 'dist/');

const exportConfig = {
  mode: "production",
  entry: {
    index: ["./src"]
  },
  output: {
    path: DIST_DIR,
    filename: "index.js",
    library: "index",
    libraryTarget: "umd",
    auxiliaryComment: "Test Comment"
  },
  target: "node",
  externals: [nodeExternals(), { react: "react", "react-dom": "react-dom" }],
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".tsx"],
    modules: [SRC_DIR, "node_modules"]
  }
};

module.exports = exportConfig;
