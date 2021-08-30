const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        use: [
          process.env.NODE_ENV === "development"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
        ],
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
      // 对html中的img资源解析，解析规则为上面的 test: /\.(jpg|jpeg|png|svg|gif)$/i,
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/index.[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: true,
    }),
  ],
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "public"),
    compress: true, // g-zip压缩
    port: 9999,
    open: true,
  },
};
