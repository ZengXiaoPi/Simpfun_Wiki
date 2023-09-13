---
title: 关闭正版验证
---

:::caution 提示

这篇文档是直接复制Java版文档的，但是基岩版这个东西**根本就不用关**！因为基岩版独特的验证逻辑，只要你登录微软账户(不管你买没买游戏)都算作你是正版！

:::

:::info

本文档隶属于[关于server.properties](../10-server-properties.md)文档。

:::

~~想和朋友联机但是没有正版？只需在服务器内关闭正版验证即可轻松联机！~~

## 修改配置文件来关闭验证

进入服务器文件管理，在根目录打开`server.properties`文件

![如果简幻欢服务器进不去，那就是能干辉打胶打到服务器主板上了，静等一段时间即可恢复](../../../../static/img/pages/serverproperties.png)

在文件中找到`online-mode=true`这一行，将`true`改为`false`即可关闭正版验证。

