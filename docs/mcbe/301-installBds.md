---
title: 下载安装BDS(及旧版?)
---

本篇文档将教你如何安装简幻欢没有的BDS服务端。

:::warning 部分内容已过期

本文档部分已过期的内容已隐藏！

:::

## 下载BDS

完整名字(Bedrock Dedicated Server)
> 注意：
> 确保你有一定动手能力,以及访问
microsoft.net
minecraft.azureedge.net
的能力

## 访问Minecraft基岩版服务器软件下载页面

``` text
https://www.minecraft.net/zh-hans/download/server/bedrock
```

选择你要下载的Minecraft(我的世界)基岩版专属服务端软件类型
``` text
适用于 WINDOWS 的 MINECRAFT 专属服务端软件
适用于 UBUNTU (LINUX) 平台的 MINECRAFT 专属服务端软件
适用于 WINDOWS 预览版的 MINECRAFT 专属服务端软件
适用于 UBUNTU (LINUX) 预览版的 MINECRAFT 专属服务端软件
```
你会看到这四个根据你的需要选择,然后勾上框框点下载就ok了
(该页面的下载按钮为最新的服务端软件)

## 下载旧版本

以(适用于 WINDOWS 的 MINECRAFT 专属服务端软件)的为例，

那些下载按钮是有直链的,复制链接你会看到

``` text
https://minecraft.azureedge.net/bin-win/bedrock-server-1.20.73.01.zip
```

你会发现要下载的文件是bedrock-server-1.20.73.01.zip

嗯我们可以替换掉它的版本号为1.16.40.02(实际中需要换成你想要下载的版本)

比如换成bedrock-server-1.16.40.02.zip

``` text
https://minecraft.azureedge.net/bin-win/bedrock-server-1.16.40.02.zip
```

我们就可以下载1.16.40.02版本的服务端软件了(当然不存在的版本那是不行的,需要存在的版本才可以)

以此类推

当然不同的下载选项之间会有一点点差异,比如(UBUNTU (LINUX) 平台的 MINECRAFT 专属服务端软件)

``` text
https://minecraft.azureedge.net/bin-linux/bedrock-server-1.20.73.01.zip
```

一个是bin-linux一个是bin-win

分别对应着类型

预览版跟正式版这部分也会有一点差异

## 安装

### 解压

解压到你想放的目录

### 启动
你可以编辑你的启动脚本
``` text
cd 你想放的目录
```
接着运行它
<!-- ``` text
.\bedrock-server.exe
``` -->
如果你的是适用于 UBUNTU (LINUX) 平台的 MINECRAFT 专属服务端软件的话需要这么运行(debian12或ubuntu20.04及以上版本才能正常运行)
``` text
./bedrock-server
```

比如:

<!-- `start.bat`
``` text
cd C:\container\bedrock-server-1.20.73.01
.\bedrock-server.exe
``` -->
`start.sh`
``` text
cd /home/container/bedrock-server-1.20.73.01
./bedrock-server
```

`/home/container/bedrock-server-1.20.73.01`要替换成实际路径
其实这个`.\`它并不重要,你也可以把它去掉