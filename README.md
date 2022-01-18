## Webpack5-Multiple-Page-Ts

### webpack5+vue3+react17+typescript+eslint+prettier多页配置，适合开发多页面网站

### 目前支持的语法
- vue3!
- react17!
### Build Setup

``` bash
# 安装依赖
yarn

# 开发的时候在本地启127.0.0.1:3000/，并开始热加载
yarn dev

# production的发布时打包
yarn build

```

### 本地访问页面示例:
``` bash
# vue.js
http://127.0.0.1:3000/vuePage.html

# react.js
http://127.0.0.1:3000/reactPage.html

```

### 开发流程

如果增加新页面，只需两步，不需要改webpack等配置文件

1. 在src目录的pages文件夹中新增一个文件夹，并在这个文件夹里添加入口文件main.ts和模板index.html
2. 在page.config.js中添加这个页面的信息即可

比如
``` bash
  {
    name: 'about',
    template: 'about/index.html',
    entry: 'about/main.ts'
  }

```
3.访问规则
``` bash
http://127.0.0.1:3000/name.html
```

