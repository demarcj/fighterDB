var webpack = require("webpack");
var path = require("path");
var config = {
  context: path.resolve(__dirname, "src", "javascript"),
  entry: {
    script:  "./script.js"
  },
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
          presets: ["react", "es2015", "stage-2", "env"]
          }
        }
      }
    ]
  }
}
module.exports = config;