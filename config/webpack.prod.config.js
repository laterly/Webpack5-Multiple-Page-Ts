const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const { resolvePath } = require('./utils');
const config = {
  mode: 'production',
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: 'chunk-[name].[hash:8].js',
    path: resolvePath('dist'),
    publicPath: './',
  },
  devtool: false,
  optimization: {
    minimizer: [
      new JsonMinimizerPlugin(),
      new TerserWebpackPlugin({
        minify: TerserWebpackPlugin.swcMinify,
        extractComments: false, //设为 false 就可以去除所有注释。
        terserOptions: {
          compress: process.env.IS_DEV ? {} : { pure_funcs: ['console.log'] }, //可以设置我们想要去除的函数，将代码中所有 console.log 去除
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          priority: -20, //优先级，权限更高，优先抽离
          name: 'vendors', //chunk命名
          test: /[\\/]node_modules[\\/]/, //匹配正则
          chunks: 'all',
          minSize: 0, //公共模块的大小限制,以 bytes 为单位
          minChunks: 1, //公共模块最少复用几次
        },
        //分割不经常改变而且比较大的包的第三方库
        defaultVendors: {
          priority: -10,
          name: 'default-vendors',
          test: /[\\/]node_modules[\\/](ant-design-vue|xlsx|moment|html2canvas|lodash)[\\/]/,
          chunks: 'all',
          minSize: 0,
          minChunks: 1,
        },
        //分割公共模块包
        commons: {
          priority: 0,
          name: 'commons',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minSize: 100,
          minChunks: 2,
        },
      },
    },
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.json$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].[hash:8].css`,
      chunkFilename: 'chunk-[name]-[hash:8].css',
    }),
  ],
};

module.exports = merge(baseConfig, config);
