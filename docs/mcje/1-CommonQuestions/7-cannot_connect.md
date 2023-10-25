---
title: 常见无法连接服务器的错误提示的解决方案
---

连接服务器时出现了类似no further information的错误提示？那你就需要这个！

:::caution

错误提示多种多样，不是这一篇文档就可以收集了的。这里只收集一些常见问题的解决方案，遇到文档里没有的要善用搜索引擎或者去群里找群友！

:::

:::caution 待完善

~~别催了在写了~~
需要收集一些常见错误，如果您有能力请在[Simpbbs](https://www.simpbbs.me/threads/%E5%85%B3%E4%BA%8E%E7%AC%AC%E4%B8%89%E6%96%B9%E6%96%87%E6%A1%A3%E7%9A%84%E6%96%B0%E5%A2%9E%E6%9D%A1%E7%9B%AE%E7%9A%84%E8%AE%A8%E8%AE%BA.79/)上提交一些常见错误，我们在验证后会加速编写到这里。

:::

## Connection refused: no further information

![1](/img/pages/MCJE-CannotConnect-1.png)

~~坤翻~~ 机翻：连接被拒绝：没有进一步的信息

常见原因：
+ 服务端侧：
  + 服务器未开启
  + 端口号错误/改端口号时改的不是`server-port`

+ 客户端侧：
  + 客户端地址输错（包括但不限于开头有空格，冒号用成了全角字符）
  + 没有联网
  + DNS炸了