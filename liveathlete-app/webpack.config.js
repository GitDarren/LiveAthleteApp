//webpack.config.js

var path = require("path");
var webpack = require("webpack");

module.export = {
  devtool: "cheap-module-eval-source-map",
  entry: ["webpack-hot-middleware/client", "./index"],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static"
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin() ///The Auth0 samples says to use NoErrorsPlugin(), so this may cause a problem
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: ["style", "raw"],
        include: __dirname
      }
    ]
  }
};
