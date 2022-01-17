const { merge } = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const { resolvePath } = require('./utils');
const config = {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: 'chunk-[name].js',
    path: resolvePath('dist'),
    publicPath: '/',
  },
  devtool: false,
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    client: {
      progress: true /* 在浏览器中以百分比显示编译进度 */,
      overlay: {
        errors: true,
        warnings: false,
      } /* 当出现编译错误或警告时，在浏览器中显示全屏覆盖 */,
    },
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  cache: {
    type: 'memory',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
        extensions: {
          vue: {
            enabled: true,
            compiler: '@vue/compiler-sfc',
          },
        },
      },
    }),
    new ESLintPlugin({
      fix: true,
      extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
    }),
  ],
};

const devConfig = merge(baseConfig, config);

module.exports = new Promise((resolve, reject) => {
  portfinder.getPort(
    {
      port: 3000,
      stopPort: 3999,
    },
    (err, port) => {
      if (err) {
        reject(err);
        return;
      }
      //端口被占用时就重新设置devServer的端口
      devConfig.devServer.port = process.env.PORT = port;
      resolve(devConfig);
    },
  );
});
