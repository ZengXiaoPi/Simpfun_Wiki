---
title: 为服务器启用作弊
---

:::info

本文档是隶属于[关于server.properties](../20-serverproperties.md)文档的子文档。

看完此文档后想了解更多信息，请阅读父文档。

:::

## 作弊未启用？

如果发现自己**拥有op权限**却不能执行`/give`、`/gamemode`、`/time`、`/tp`和`/gamerule`等指令的话，说明服务器**未启用作弊**。

## 启用作弊

:::tip

为了保险，最好在服务器关闭状态下进行。

:::

在服务器文件管理根目录找到`server.properties`文件并打开，在其中找到这一行：

```
allow-cheat=falseallow-cheats=false
# If true then cheats like commands can be used.
# Allowed values: "true" or "false"
```

将`false`改为`true`并重启服务器即可启用作弊。

*似乎Java版默认没有此项设置？*
~~Java版默认开启全部权限，所以这一条应该是针对基岩版的，问题是谁把这条写到Java版底下的？~~