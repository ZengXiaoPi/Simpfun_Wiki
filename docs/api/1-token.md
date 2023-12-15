---
title: 获取token
---
:::warning 仅适合有基础的！
有基础的一眼就懂,就算不懂的话需轻微了解)
::tip
因为这玩意儿很简单,轻微学习也能正常使用
:::info

##token用于进行交互(一些操作基本都要用到),没有他,部分(只要与登录相关才能用的都用不了(也就是说进行一些操作它是必须的)

##GET大多数情况下用于获取数据,POST大多数情况下用于提交数据

##以下为获取token示例
curl -X POST https://api.simpfun.cn/api/auth/login -d "username=用户&passwd=密码"

##如果你使用的是其他语言比如Java,C#,C++,Python,Rust,JavaScript(Node.js),PHP,Go等等...
::tip
其实懂一点,应该知道是什么意思了,就是向url,POST或GET一个东西,然后他返回一个东西给你(废话:知道的应该知道

##成功返回值大概为
::tip
{"code":200,"msg":"登录成功","token":"token值"}
##失败的话就直接返回错误了

:::
