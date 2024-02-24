---
title: 启用命令方块
---

想在服务器中使用命令方块但是又不知道怎么打开？那么你就需要看这个！

## 更改server.properties

:::info

这段内容是隶属于[关于server.properties](../20-serverproperties.md)文档的。

看完这段内容后想了解更多信息，请阅读父文档。

:::

:::tip

为了保险，最好在服务器关闭状态下进行。

:::

在服务器文件管理根目录找到`server.properties`文件并打开，在其中找到这一行:

```text
enable-command-block=false
```

将其中的`false`改为`true`后保存并重启服务器，这样就启用命令方块了。
