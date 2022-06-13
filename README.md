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
