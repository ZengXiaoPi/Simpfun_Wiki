---
title: 必须看的前言
---

:::warning 写在最前面的警告

+ 如果你打算使用自定义开服的话，请确保你已经具备了一定的开服经验和英文阅读水平。
+ 没有这方面的经验不要轻易尝试这部分的内容！
+ 我们欢迎大家参与完善文档。请到Github[提交issue](https://github.com/ZengXiaoPi/Simpfun_Wiki/issues)或者[发起Pull Requests](https://github.com/ZengXiaoPi/Simpfun_Wiki/pulls)。
:::

## 什么是“自定义”预设

`“自定义”预设`是指只提供运行环境，技术细节均由个人解决的实例镜像，门槛较高。

服务器在创建后，根目录下只有一个`start.sh`(Linux)或`start.bat`(Windows)。

## “自定义”预设都有哪些？

简幻欢SFE4目前提供3种类型的自定义预设，分别是 `Java多版本镜像`(Linux)， `Python镜像`(Linux)，`Server2019镜像`(Windows)，如下图所示。

![お昼寝にちょうどいい場所はどこかな～](/img/pages/CustomServer-in-1.png)

下面将介绍每种预设的区别。

### Java镜像

在简幻欢服务器上使用最多的镜像，运行在Linux系统的Docker下(实际系统为Debian 12.2)，内置了4种版本的Java，分别为JDK8，JDK11，JDK17，JDK19。此镜像是开Java版MC服务器的首选。

### Python镜像

运行在Linux系统的Docker下(实际系统为Debian 12.2)，内置Python3.9.2的一个镜像，MCDR需要使用此镜像部署。

:::info 提示

此镜像没有提供Java，需要自己导入Java使用。

~~不过第三方镜像里有配置好了Java的MCDR可以用（~~

:::

### Server2019镜像

使用Windows Server 2019的镜像，运行在Windows Docker下。目前分为两个版本。

#### 20230829版

包括`.Net 6.0.20`，`VC++ 2015——2022`，`Python 3.11.5`，`zulu JDK 8.0.382(Java 8)`，`zulu JDK 17.0.8(Java 17)`，如下图所示。且在`start.bat`内已定义Java和Python的路径，直接调用即可。运行基岩版MC服务器的首选。

![無駄だよ～](/img/pages/CustomServer-in-2.jpg)

#### 20240125版

本镜像含有运行库：`.Net 7.0.15`，`VC++ 2015-2022`，`Python 3.12`，`DirectX`

含有组件：`Mapper端口转发`

支持需要DirectX的服务端（部分Steam服务端）。如果你运行的LLBDS服务端里的插件需要.net7则需要使用此镜像。

:::caution 提示

Windows的镜像无法和其他Linux镜像互转重装，只能重装为使用Windows的镜像！

:::

## 我在什么时候需要使用自定义镜像？

:::warning 警告

在简幻欢，我们专注于提供游戏服务器的支持和服务。请注意，我们的平台仅适用于游戏服务器的搭建，若发现在此建立其他服务（如网站，网盘等），我们将关闭您的服务器并永久封禁您的账户。

:::

例子：

MCJE：当简幻欢缺失了你需要的游戏版本时，或者你需要开整合包服务器时，需要使用自定义镜像。

MCBE：当简幻欢缺失了你需要的游戏版本时，需要使用自定义镜像。

## 默认的启动脚本

此部分内容已迁移至[【实例管理】默认的启动脚本](../14-default_start.md)。
