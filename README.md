## webpack5.0 Multi page

### webpack5+vue+react+typescript+eslint+prettier多页配置，适合开发多页面网站

### 目前支持的语法
- [vue.js!](https://cn.vuejs.org/)
- [react.js!](https://reactjs.org/)
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


### 目录结构
``` bash
|-- webpack5-multi-ts
    |-- .browserslistrc
    |-- .eslintignore
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierignore
    |-- babel.config.js
    |-- package.json
    |-- page.config.js
    |-- postcss.config.js
    |-- prettier.config.js
    |-- project.config.js
    |-- README.md
    |-- tsconfig.json
    |-- yarn.lock
    |-- config
    |   |-- utils.js
    |   |-- webpack.base.config.js
    |   |-- webpack.dev.config.js
    |   |-- webpack.prod.config.js
    |-- dist
    |   |-- react-page.dc5080e3.css
    |   |-- react-page.dc5080e3.js
    |   |-- react-page.html
    |   |-- vendors.dc5080e3.js
    |   |-- vue-page.dc5080e3.css
    |   |-- vue-page.dc5080e3.js
    |   |-- vue-page.html
    |-- src
        |-- pages
            |-- index
            |   |-- index.css
            |   |-- index.html
            |   |-- main.ts
            |-- react
            |   |-- App.css
            |   |-- App.tsx
            |   |-- index.css
            |   |-- index.html
            |   |-- logo.svg
            |   |-- main.tsx
            |   |-- react-app-env.d.ts
            |   |-- components
            |   |-- hooks
            |   |-- pages
            |   |   |-- 404
            |   |   |   |-- PageNotFound.tsx
            |   |   |-- home
            |   |       |-- index.tsx
            |   |-- router
            |   |   |-- index.tsx
            |   |-- styles
            |   |-- types
            |-- vue
                |-- App.vue
                |-- index.html
                |-- main.ts
                |-- sfc.d.ts
                |-- shims-vue.d.ts
                |-- assets
                |   |-- logo.png
                |-- components
                |   |-- HelloWorld.vue
                |-- router
                |   |-- index.ts
                |   |-- routes.ts
                |-- views
                    |-- about.vue
                    |-- home.vue

```

### 开发流程

如果增加新页面，只需两步，不需要改webpack等配置文件

1. 在pages中新增一个文件夹
2. 在page.config.js中添加这个页面的信息即可

比如
``` bash
  {
    name: 'about',
    template: 'about/about.html',
    entry: 'about/about.js'
  }

```
3.访问规则
``` bash
http://127.0.0.1:3000/name.html
```

