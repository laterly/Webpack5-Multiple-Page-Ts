/**
 * name chunk的名字
 * template 模板名字
 * entry 入口文件
 */
module.exports = [
  {
    name: 'index',
    template: 'index/index.html',
    entry: 'index/main.ts',
  },
  {
    name: 'vue-page',
    template: 'vue/index.html',
    entry: 'vue/main.ts',
  },
  {
    name: 'react-page',
    template: 'react/index.html',
    entry: 'react/main.tsx',
  },
];
