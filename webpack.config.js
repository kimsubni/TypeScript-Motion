/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    entry: "./src/index.ts", // 시작점
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          use: {
            loader: "babel-loader",
          },
          exclude: ["/node_modules"],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },

        {
          // 이미지 포멧: PNG, JP(E)G, GIF, SVG, WEBP
          test: /\.(png|jpe?g|gif|svg|webp)$/,
          use: { loader: "file-loader" },
          // options: {
          //   publicPath: "./dist",
          //   name: "[name].[ext]?[hash]",
          // },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    optimization: { minimize: true },
    resolve: {
      modules: ["node_modules"],
      extensions: [".ts", ".js", ".json", ".scss"],
      alias: {
        "@": path.join(__dirname, "./src"),
      },
    },
    output: { path: path.join(__dirname, "./dist/src"), filename: "[name].js" },
    devtool: "source-map",
    mode: "development",
  };
};
