# 核心概念

## entry

## output

## loader

1. asset
   > 代替 url-loader,file-loader,webpack5 内置的资源管理

- asset/resource
- asset/inline
- ...

## plugin

1.  html-webpack-plugin

## mode

# SourceMap

当 mode 为 development，devtool 默认为 eval
当 mode 为 production，devtool 默认为 none

`[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map`

1. eval: 不生成 source map，而是生成一个类似 source map 的 url，插入 bundle 中，`//# sourceURL=webpack://webpack-demo/./src/index.js?`
2. source-map: 单独生成 source map 文件，插入 bundle 中 `//# sourceMappingURL=index.bundle.js.map`
3. eval-source-map: 生成 source-map，但不单独生成文件，而是以 DataUrl 的形式，插入 bundle `//# sourceMappingURL=data:application/json;charset=utf-8;base64,xxxxx`
4. cheap: 只有行映射，没有列映射
5. module: loader
