
# myvue-cli


## 简介
> 自配 vue+webpack+typescript 脚手架，==放心的写你的业务逻辑代码,我帮你实现配置==

> [更新历史](https://github.com/6peiweb/myvue-cli/blob/master/CHANGELOG.md)

## Build Setup

``` bash
# install module dependencies
npm install

# serve with hot reload at 127.0.0.1:4000
npm start

```
## 技术栈

- HTML模板引擎：pug
```
graph LR
pug-->|vue-loader|html
```
- css预处理器：sass
```
graph LR
sass-->|sass-loader|b[css]
b-->|css-loader|c[style]
c-->|style-loader|html
```
- JavaScript超集：TypeScript
```
graph LR
ts-->|tslint-loader|b[ts]
b-->|ts-loader|js
vue-->|ts-loader|tsx
tsx-->|ts-loader|js

```

## 实现三种构建方式

- npm start

> 通过webpack-dev-middleware与webpack-hot-middleware将前端应用当做静态文件托管在部署后端的端口上，同时实现热更新。后端代码通过supervisor监听代码更新，以及webpack打包文件变化。从而实现前后端分离的应用能部署在同一个端口上。

- npm run dev

> 利用webpack-dev-server开启端口服务器，用于前端开发运行时

- npm run build

> 线下打包前端应用
