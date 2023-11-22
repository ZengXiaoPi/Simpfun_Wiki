---
title: 常见无法连接服务器的错误提示的解决方案
---

连接服务器时出现了类似no further information的错误提示？那你就需要这个！

:::caution

错误提示多种多样，不是这一篇文档就可以收集了的。这里只收集一些常见问题的解决方案，遇到文档里没有的要善用搜索引擎或者去交流群里找群友！

:::

:::caution 待完善

~~别催了在写了~~  
我们需要收集一些常见错误，如果您有能力请在[simpfun.icu](https://simpfun.icu/d/99)或者[Github](https://github.com/ZengXiaoPi/Simpfun_Wiki/issues)上提交一些常见错误，我们在验证后会加速编写到这里。在此感谢您做出的贡献，

:::

## Connection refused: no further information

![沈むように溶けてゆくように](/img/pages/MCJE-CannotConnect-1.png)

翻译：`连接被拒绝：没有进一步的信息`

常见原因：
+ 服务端侧：
  + 服务器未开启
  + 端口号错误/改端口号时改的不是`server-port`

+ 客户端侧：
  + 客户端地址输错（包括但不限于开头有空格，冒号用成了全角字符）
  + 没有联网
  + DNS炸了

## Internal Exception: Invalid characters in username

![二人だけの空が広がる夜に](/img/pages/MCJE-CannotConnect-2.png)

错误全文：`Internal Exception: java.langillegalstateException: Invalid characters in username`

翻译：`内部异常：java.langillegalstateException：用户名中的字符无效`

原因：
+ 客户端侧：
  + 在1.18及更高的版本中，玩家用户名内存在除了英文、数字、下划线以外的其他字符(例如中文)
  
解决方案：
+ 更改用户名
+ 使用[该链接](https://www.mcbbs.net/thread-1343036-1-1.html)来修复


待补充......
