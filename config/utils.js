const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pageConfig = require('../page.config.js');
const env = process.env.NODE_ENV;
const commonCssLoader = [
  env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader',
];

const resolvePath = setPath => {
  return path.resolve(__dirname, '..', setPath);
};
//多入口文件配置
const mulitHtmlWebpackPlugins = () => {
  let mulitWebpackConfig = {
      entry: {},
      plugins: []
  };
  if (pageConfig && Array.isArray(pageConfig)) {
      pageConfig.map(page => {
          mulitWebpackConfig.entry[page.name] = env == 'development' ? [`./src/pages/${page.entry}`, `./src/pages/${page.template}`] : `./src/pages/${page.entry}`;
          
          let template = path.resolve(__dirname, `../src/pages/${page.template}`);
          
          mulitWebpackConfig.plugins.push(new HtmlWebpackPlugin({
              filename: `${page.name}.html`,
              template,
              inject: true,
              chunks: ["vendors","common","runtime",page.name],
              chunksSortMode: "manual"
          }))
      })
  }
  return mulitWebpackConfig
}


module.exports = {
  commonCssLoader,
  resolvePath,
  mulitHtmlWebpackPlugins
};
