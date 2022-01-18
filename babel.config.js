module.exports = {
  presets: [
    'babel-preset-react-app',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        loose: true,
        corejs: {
          //core-js的版本
          version: 3,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    '@babel/plugin-transform-typescript',
  ],
};
