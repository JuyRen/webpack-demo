const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 代替style-loader, 将css以文件形式引入 https://webpack.docschina.org/plugins/mini-css-extract-plugin/

module.exports = {
  /**
   * development: 开发模式，构建快，省略了代码优化
   * production(默认): 生产模式，打包慢，自动开启代码压缩和tree-shaking
   * none: 不使用任何默认优化选项
   */
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // https://webpack.docschina.org/guides/asset-modules
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash:8][ext]", // 文件打包生成的目录以及文件名
        },
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
    }),
  ],
  resolve: {
    extensions: [".js", "..."], // 引入文件后缀从左到右依次匹配， 如果想在默认基础上拓展， 使用 ...， 代表默认后缀
  },
  devtool: "eval-cheap-module-source-map",

  devServer: {
    port: 9999,
    // open: true,
    compress: true,
    static: "./public/static", // 默认public
  },
};
