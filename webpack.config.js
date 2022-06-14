const path = require("path");

const resolve = (name) => path.resolve(__dirname, name);

module.exports = {
  entry: "./src/main.js", // 相对路径
  output: {
    path: resolve("dist"), // 绝对路径
    filename: "index.js",
    clean: true, // 打包前删除目标path， 代替webpack5之前的插件
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        // loader执行顺序为倒叙
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: "static/images/[name].[hash:10][ext]",
        },
      },
    ],
  },
  plugins: [],
  mode: "development",
};
