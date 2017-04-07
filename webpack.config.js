var webpack = require("webpack");
var path = require("path");
var config = {
//  entry: path.resolve(__dirname, "src", "javascript") + "/script.js",
  entry: path.resolve(__dirname, "src", "javascript") + "/script.js",
  output: {
    path: path.resolve(__dirname, "src", "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
          presets: ["react", "es2015", "stage-2", "env", 'react-hmre']
          }
        }
      }
    ]
  }
}
module.exports = config;