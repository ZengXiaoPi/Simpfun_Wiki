---
title: 常见无法连接服务器的错误提示的解决方案
---

连接服务器时出现了类似no further information的错误提示？那你就需要这个！

:::caution

错误提示多种多样，不是这一篇文档就可以收集了的。这里只收集一些常见问题的解决方案，遇到文档里没有的要善用搜索引擎或者去群里找群友！

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