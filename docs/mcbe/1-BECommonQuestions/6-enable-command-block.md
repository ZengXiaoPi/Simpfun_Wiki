---
title: 启用命令方块
---

想在服务器中使用命令方块但是又不知道怎么打开？那么你就需要看这个！

## 方法A：使用命令

打开控制台

![ターゲット、ロックオン、光よ！](/img/pages/Terminal.png)

在控制台输入以下命令：

```text
gamerule commandblocksenabled true
```

**注：需要[启用作弊](./2-allow_cheat.md)**

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

然后在有OP权限的情况下游戏内的设置就可以更改了。
