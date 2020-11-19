const merge = require("webpack-merge");
const webpack = require("webpack");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("./webpack.base.js");

module.exports = merge(baseConfig, {
  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/
    },
    host: "localhost",
    port: 8000,
    proxy: {
      "/api/v1/*": {
        target: "http://localhost:3000/",
        secure: false,
        changeOrigin: true,
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "churchify-app-frontend",
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`
    }),
    // new DashboardPlugin(),
  ],

  mode: "development"
});
