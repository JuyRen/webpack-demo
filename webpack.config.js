const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        type: "asset", // 判断图片资源大小，小于限定大小：asset/inline 大于限定大小：asset/resource
        parser: {
          // https://webpack.docschina.org/configuration/module/#ruleparserdataurlcondition
          dataUrlCondition: {
            maxSize: 8 * 1024, // 默认：8kb
          },
        },
        generator: {
          filename: "static/images/[hash:10][ext]",
        },
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/font/[hash:10][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/logo-1.png",
      inject: true,
      minify: true,
    }),
  ],
  mode: "development",
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "public"),
      watch: false,
    },
    compress: true, // g-zip压缩
    port: 9999,
  },
};
