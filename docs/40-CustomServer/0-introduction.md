---
title: 必须看的前言
---

:::warning 写在最前面的警告

如果你打算使用自定义开服的话，请确保你已经具备了一定的开服经验和英文阅读水平。
没有这方面的经验不要轻易尝试这部分的内容！

:::

## 什么是“自定义”预设

"自定义“预设是指只提供运行环境，技术细节均由个人解决的实例镜像，门槛较高。

## “自定义”预设都有哪些？

简幻欢SFE4目前提供3种类型的自定义预设，分别是 `Java多版本镜像`(Linux)， `Python镜像`(Linux)，`Server2019镜像`(Windows)，如下图所示。

![お昼寝にちょうどいい場所はどこかな～](/img/pages/CustomServer-in-1.png)

下面将介绍每种预设的区别。

### Java镜像

在简幻欢服务器上使用最多的镜像，运行在Linux系统的Docker下(实际系统为Debian 12.2)，内置了4种版本的Java，分别为JDK8，JDK11，JDK17，JDK19。此镜像是开Java版MC服务器的首选。

### Python镜像

内置Python3.9.2的一个镜像，运行在Linux系统的Docker下(实际系统为Debian 12.2)，MCDR需要使用此镜像部署。

:::tip

此镜像似乎没有Java，需要自己导入Java使用。

:::

### Server2019镜像

使用Windows Server 2019的镜像，内置多种运行库，包括`.Net 6.0.20`，`VC++ 2015——2022`，`Python 3.11.5`，`zulu JDK 8.0.382(Java 8)`，`zulu JDK 17.0.8(Java 17)`，如下图所示。且在`start.bat`内已定义Java和Python的路径，直接调用即可。运行基岩版MC服务器的首选，运行Java版MC服务器的备选。
![無駄だよ～](/img/pages/CustomServer-in-2.jpg)

:::caution 提示

Windows的镜像无法和其他Linux镜像互转重装，只能重装为使用Windows的镜像！

:::