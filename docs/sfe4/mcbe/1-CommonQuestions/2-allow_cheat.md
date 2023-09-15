---
title: 为服务器启用作弊
---

:::info

本文档是隶属于[关于server.properties](../10-server-properties.md)文档的子文档。

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
allow-cheat=false
# If true then cheats like commands can be used.
# Allowed values: "true" or "false"
```

将`false`改为`true`并重启服务器即可启用作弊。

![这个B问题群里天天都有人问](/img/pages/MCBE-CommonQuestions-1.png)
~~(群友的愤怒)~~