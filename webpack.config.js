const nodeExternals = require("webpack-node-externals")
module.exports = {
  // target 设置为 node，webpack 将在类 Node.js 环境编译代码，使用 Node.js 的 require 加载 chunk，而不加载任何内置模块，如 fs 或 path
  target:"node",
  // 打包入口
  entry:"./app.js",
  // 输出文件
  output:{
    filename:"app.js",
    // 清除之前打包的文件
    clean:true,
  },
  // // 可以不写文件后缀
  // resolve: {
  //   extensions: ['.js', '.json'],
  // },
  externals:[nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}