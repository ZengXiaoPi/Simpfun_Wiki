---
title: 获取token
---
:::caution 仅适合有基础的！
有基础的一眼就懂,就算不懂的话需轻微了解)
因为这玩意儿很简单,轻微学习也能正常使用
:::
:::info

##token用于进行交互(一些操作基本都要用到),没有他,部分(只要与登录相关才能用的都用不了(也就是说进行一些操作它是必须的)

##GET大多数情况下用于获取数据,POST大多数情况下用于提交数据

##以下为获取token示例
curl -X POST https://api.simpfun.cn/api/auth/login -d "username=用户名&passwd=密码"

:::
:::tip
##成功返回值大概为
{"code":200,"msg":"登录成功","token":"token值"}
##失败的话就直接返回错误了
:::
