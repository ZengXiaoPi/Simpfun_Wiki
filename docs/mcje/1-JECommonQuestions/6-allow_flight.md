---
title: 启用飞行
---

在服务器起飞或者浮空的时候被误踢？那你就需要这个！

:::info 提示

本文档是隶属于[关于server.properties](../20-serverproperties.md)文档的子文档。

看完此文档后想了解更多信息，请阅读父文档。

:::

在2023.11.15，简幻欢预设已修复该问题，现在`allow-flight`在简幻欢预设服务端内默认为`true`。

**如果您的服务端不是简幻欢预设，请接着往下看。**

![好耶](/img/pages/MCJE-allowflight-1.png)

## 关闭自带的飞行检测

:::tip

为了保险，最好在服务器关闭状态下进行。

:::

在服务器文件管理根目录找到`server.properties`文件并打开，在其中找到这一行:

```text
allow-flight=false
```

将其中的`false`改为`true`后保存，这样就关闭自带的~~答辩~~飞行检测了。  

## 编者有话说

之前QQ群有人还说这玩意改true外挂都不需要绕了，我就想说，真的会有人用这个自带的答辩配置来反作弊？这东西随便来个挂都能绕过去好吧。

![不懂装懂是这样的](/img/pages/MCJE-CommonQuestions-1.jpg)
