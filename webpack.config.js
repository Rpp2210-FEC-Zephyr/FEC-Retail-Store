const path = require("path");
const webpack = require("webpack");
/*"build": "babel src.js -d Javascript", */
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
module.exports = {
  mode: "production",
  entry: `${SRC_DIR}/Index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
