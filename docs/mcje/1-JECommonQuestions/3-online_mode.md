---
title: 关闭正版验证
---

:::info

本文档隶属于[关于server.properties](../20-serverproperties.md)文档。

:::

*注：似乎SFE4中的预设默认关闭正版验证（在线模式）来着*

想和朋友联机但是没有正版？只需在服务器内关闭正版验证即可轻松联机！

## 修改配置文件来关闭验证

进入服务器文件管理，在根目录打开`server.properties`文件

![如果简幻欢服务器进不去，那就是能干辉打胶打到服务器主板上了，静等一段时间即可恢复](../../../static/img/pages/serverproperties.png)

在文件中找到`online-mode=true`这一行，将`true`改为`false`即可关闭正版验证。

## 后话（萌新慎入

自从1.20开始游戏内置了皮肤，离线服务器下玩家外观不再只有Steve和Alex两个皮肤，而是各种各样……

但是进入服务器后，你分配到的皮肤大概率会是~~内个~~黑人。

:::warning 以下内容萌新勿入！
:::

如果觉得**默认分配出的皮肤不好看**同时不想买正版，可以阅读此文档来为你的服务器启用**第三方登录**[进阶教程：为服务器启用第三方登录](../50-authlib-injector.md)
当然你可以用[SkinsRestorer](https://www.spigotmc.org/resources/skinsrestorer.2124/)来加载皮肤,虽然不能加载披风
再次温馨提示：开服小白请勿选用第三方登录，问问题被骂不管编者事！~~（逃~~
