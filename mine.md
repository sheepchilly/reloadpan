# 1.基础配置

node版本 - 16.17.1

## 1.配置启动接口

1.因为项目是由vite配置的，所以在Vite.config.js中配置server。port就是端口号，从5173改为了1024，hmr是热重启为true（ctrlS后会自动更新）

2.proxy是代理配置，后端的接口是7090

```js
  server:{
    port:1024,
    hmr:true,
    proxy:{
      "/api":{
        target:'http://localhost:7090',
        changeOrigin:true,
        pathRewrite:{
          "^api":"/api"
        }
      }
    }
  }
```

