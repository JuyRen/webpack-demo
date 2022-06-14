## 安装 webpack， webpack-cli

> 运行`npx webpack`时，没有安装会提示

1. webpack, 编译代码逻辑
2. webpack-cli， 运行编译的脚本逻辑

## 运行

> `npx webpack ./src/main.js --mode=development|production`

1. development: 使用`webpack_require`引入 module，源码不转译
2. production: 源码转译，并压缩

## 配置

> 五个核心概念 `entry`, `output`, `module(loader)`, `plugins`, `mode`

### entry

> webpack 编译入口文件路径（`相对路径`），可以为单文件和多文件

### output

> 入口文件打包输出配置

1. path: 输出路径(`绝对路径`)
2. filename: 输出文件名

### module

1. rules: `{ test: /\.css$/i, use: loaders[], type: 'asset' }[]`

- use 里放 loader
- 静态资源（图片，字体，文件等），使用 `type: asset`
  - asset/resource: 编译为同文件输出
  - asset/inline: 编译为 base64
  - asset/source: 源码形式
  - asset: 超过 limit 大小的转为同文件输出，否则 base64
