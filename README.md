##  vue实现的demo

> 基于vue + vuex + axios +element ui实现的demo

## 演示
> 使用chrome，打开开发者工具，开启手机调试模式

## 安装构建
>确保已经安装了vue-cli,webpack


```
# 安装依赖
npm install

# 开发环境
npm run start

# 打包项目
npm run build (nginx配置指定到dist文件地址)

```

## 关于接口数据

使用的是easy mock

## 项目布局
```
.
├── build                                       // webpack配置文件
│
├── config                                      // 项目打包路径
│
├── dist                                        // 上线项目文件，放在服务器即可正常访问
│
├── screenshots                                 // 项目截图
│
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   │  
│   │   ├── common                              // 公共组件
│   │   │   ├── alertTip.vue                    // 弹出框组件
│   │   │   └──loading.vue                      // 页面初始化加载数据的动画组件
│   │   │  
│   │   ├── footer
│   │   │   └── index.vue                       // 底部公共组件
│   │   │  
│   │   └── header
│   │       └── head.vue                        // 头部公共组件
│   │  
│   ├── api                                     // 接口配置
│   │   ├── config.js                           // 基础配置
│   │   └── index.js                            // axios的配置
│   ├── views
│   │   │  
│   │   ├── home
│   │   │   └──index.vue                        // 首页
│   │   │  
│   │   ├── login
│   │   │   └── login.vue                       // 登录页
│   │   │  
│   │   ├── forget
│   │   │   ├── index.vue                       // 忘记密码页
│   │   │   ├── smsForget.vue                   // 发送短信页
│   │   │   └── newPassword.vue                 // 更改密码页
│   │   │  
│   │   └──register
│   │       └── index.vue                       // 注册页
│   │   
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── index.js                            // 路由配置
│   │   
│   ├── store                                   // vuex的状态管理
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── type.js                             // 基础配置
│   │   └── models                              // store模块
│   │       ├── user.js                         // 用户相关的模块
│   │       └── common.js                       // 常用模块
│   │   
│   └── assets
│   │       ├── images                          // 图片
│   │       └── scss                            // scss文件
│   │             ├── common.scss               // 公共样式文件
│   │             ├── mixin.scss                // 样式配置文件
│   │             └── login.css                 // 登录样式
│   │
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.
```
