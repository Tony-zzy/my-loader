const path = require("path");
const Htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "none",
  entry: path.join(__dirname, "src/main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ["html-loader", "./markdown-loader"],
      },
    ],
  },
  plugins: [
    new Htmlwebpackplugin({
      title: "My Webpack App",
      filename: "myIndex.html",
      template: "./src/index.html",
      meta: {
        viewport: "width=device-width",
      },
    }),
    new Htmlwebpackplugin({
      // title: "My Webpack App",
      filename: "about.html",
      // template: "./src/index.html",
      // meta: {
      //   viewport: "width=device-width",
      // },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public' }   
      ],
    })
  ],
};
