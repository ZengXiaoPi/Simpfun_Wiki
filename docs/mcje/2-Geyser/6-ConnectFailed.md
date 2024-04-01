---
title: 协议不支持的地址族
---

原因是面板会把那个server-ip字段自动设置成点0.0.0.0

如果有ipv6的话就进不去了

~~（问题是简幻欢好像也不支持Ipv6来着）~~

:::caution e..
目前只在neoforge发现
:::
## 问题如下
玩家无法通过Geyser进入服务器

![GeyserConnectFailed](/img/pages/GeyserConnectFailed-1.jpg)

## 解决方法

找到server.properties配置文件,这个配置文件在你的Minecraft服务器根目录

找到server-ip字段,如果你不打算给服务器绑定IP的话,该配置留空,如果有东西的话把它清掉！

嗯当然这个面板每次开机还有会把它填成0.0.0.0
试试如下命令,把它更改为空
``` bash
sed -i 's/server-ip=.*/server-ip=/' server.properties
```
把它填充在你的启动脚本的最上面,但是在#!/bin/bash下面

比如
![GeyserConnectFailed](/img/pages/GeyserConnectFailed-2.png)

