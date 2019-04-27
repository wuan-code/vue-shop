# vue项目README
##  vue实现的demo

> 基于vue + vuex + axios +element ui + webpack  + ES6 + svg 实现的商城

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

## 目标功能
- [x] 登录、注册 —— 完成
- [x] 忘记密码、修改密码 —— 完成
- [x] 首页:轮播图（使用swiper,以及懒加载）、滚动新闻、分类、商品列表(图片懒加载) ——完成
- [x] 底部选择栏(使用svg) —— 完成
- [ ] 搜索商品功能 —— 未完成
- [ ] 地图定位功能 —— 未完成
- [ ] 城市选择  —— 未完成
- [ ] 商品分类页面（商品分类、商品列表） ——未完成
- [ ] 商品详情页
- [ ] 动态列表页 —— 未完成
- [ ] 动态详情 —— 未完成
- [ ] 添加购物车功能 —— 未完成
- [ ] 个人中心页 —— 未完成
- [ ] 上传头像功能—— 未完成
- [ ] 修改账户信息 —— 未完成
- [ ] 购物车列表页 ——未完成
- [ ] 订单列表页 —— 未完成
- [ ] 订单详情页 —— 未完成
- [ ] 确认订单页 —— 未完成
- [ ] 发送短信功能 —— 未完成
- [ ] 服务中心 —— 未完成
- [ ] 分享功能 —— 未完成
- [ ] 付款功能 —— 未完成
- [ ] 优惠券功能 —— 未完成

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


## 打包出现的问题
- [x] 如果执行<code><font color=#c7254e size=3>npm run build</font></code>报错
```
Tip: built files are meant to be served over an HTTP server.
  Opening index.html over file:// won't work.
```
因为vue-cli的默认配置中, publishPath是用绝对目录,
所以dist文件夹里的文件必须放在服务器的根目录,
如果你想本地打开的话, 可以在npm run build完成之后执行以下命令:
```
npm install -g http-server // 该命令只需执行一次, 安装过之后, 以后就不需要重复安装了.
xz```

## 截图
![image](https://github.com/yaobin24/vue-shop/blob/master/screenshots/home.jpg)

![image](https://github.com/yaobin24/vue-shop/blob/master/screenshots/login.jpg)

![image](https://github.com/yaobin24/vue-shop/blob/master/screenshots/register.jpg)



