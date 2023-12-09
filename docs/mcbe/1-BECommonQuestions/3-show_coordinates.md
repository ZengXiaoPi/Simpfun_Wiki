---
title: 启用坐标显示
---

进入游戏后左上角不显示坐标，游戏设置里的坐标显示又点不动？那你就需要这个！

## 方法A：使用命令

打开控制台

![ターゲット、ロックオン、光よ！](/img/pages/Terminal.png)

在控制台输入以下命令：

```text
gamerule showcoordinates true
```

**注：需要启用作弊**

## 方法B：修改配置文件

:::info

这段内容是隶属于[关于server.properties](../10-server-properties.md)文档的。

看完这段内容后想了解更多信息，请阅读父文档。

:::

在 **server.properties** 中添加以下配置并重新启动服务器。

```ini
op-permission-level=4
```

如图所示

![揺るがぬ意志で、光よ！](/img/pages/MCBE-CommonQuestions-2.png)

然后在有OP权限的情况下服务器设置就可以更改了。