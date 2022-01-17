module.exports = {
  presets: [
    'babel-preset-react-app',
    '@babel/preset-env',
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
