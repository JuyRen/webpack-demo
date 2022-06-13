const path = require("path");

const resolve = (name) => path.resolve(__dirname, name);

module.exports = {
  entry: "./src/main.js", // 相对路径
  output: {
    path: resolve("dist"), // 绝对路径
    filename: "index.js",
  },
  module: {},
  plugins: [],
  mode: "development",
};
