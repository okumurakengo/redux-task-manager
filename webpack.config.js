const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index",

  output: {
    path: path.resolve("public/dist"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
