const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const {
  commonCssLoader,
  resolvePath,
  mulitHtmlWebpackPlugins,
} = require('./utils');
const env = process.env.NODE_ENV;
module.exports = {
  entry: mulitHtmlWebpackPlugins().entry,
  target: 'web',
  resolve: {
    alias: {
      '@': resolvePath('src'),
    },
    extensions: ['.ts', '.json', '.js', '.vue', '.scss', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        oneOf: [
          {
            test: /\.s[ca]ss$/,
            use: [
              ...commonCssLoader,
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.less$/i,
            use: [
              ...commonCssLoader,
              {
                loader: 'less-loader',
              },
            ],
          },
          {
            test: /\.css$/,
            use: [...commonCssLoader],
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: /node_modules/,
            options: {
              minimize: false,
            },
          },
          {
            test: /\.(png|jpeg|jpg|gif|webm|svg)$/,
            type: 'asset',
            exclude: /node_modules/,
            include: resolvePath('src'),
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename:
                env == 'development'
                  ? `images/[name].[ext]`
                  : `images/[name][hash:8].[ext]`,
            },
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aa)$/,
            type: 'asset',
            exclude: /node_modules/,
            include: resolvePath('src'),
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename:
                env == 'development'
                  ? `media/[name].[ext]`
                  : `media/[name][hash:8].[ext]`,
            },
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            type: 'asset',
            exclude: /node_modules/,
            include: resolvePath('src'),
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename:
                env == 'development'
                  ? `fonts/[name].[ext]`
                  : `fonts/[name][hash:8].[ext]`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    ...mulitHtmlWebpackPlugins().plugins,
  ],
};
