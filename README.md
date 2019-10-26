# shopping

> 基于Vue+Vant开发的移动端购物商城项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
============移动端开发遇到的小问题=====================
1 解决 eslint 空格tab 不分问题 
找到vue 项目中的 .eslintrc.js , 在rules 中 添加
  'no-tabs': 0,
  'no-mixed-spaces-and-tabs': 0,
  'indent': ["off", "tab"],
  'no-trailing-spaces': 0,