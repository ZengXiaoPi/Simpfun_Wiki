---
title: 【实例管理】默认的启动脚本
---

:::info 提示

这里写的是Windows镜像下和Linux镜像下默认的`seart.cmd`/`start.sh`，如果你“一不小心”把默认的删了就可以来这里恢复。

:::

## Linux(start.sh)

### Java镜像

所有Minecraft Java版均使用此镜像预设。

```bash
#!/bin/bash

#启动变量说明，修改前务必查看
#https://www.yuque.com/simpfun/sfe/startup

openjdk8="/usr/bin/jdk/jdk1.8.0_361/bin/java"
openjdk11="/usr/bin/jdk/jdk-11.0.18/bin/java"
openjdk17="/usr/bin/jdk/jdk-17.0.6/bin/java"
openjdk19="/usr/bin/jdk/jdk-19.0.2/bin/java"
openjdk21="/usr/bin/jdk/jdk-21.0.2/bin/java"

maxmem=$((SERVER_MEMORY - 1000))

# 示例：使用JDK17 启动server-release.jar 
#${openjdk17} -Xms1024M -Xmx${maxmem}M -jar server-release.jar nogui

```

### Python镜像

```shell
#!/bin/bash

#启动变量说明，修改前务必查看
#https://www.yuque.com/simpfun/sfe/startup


python3 -V
echo "您需要修改启动参数来配置您的服务端"

```

:::info 提示

python镜像不含Java运行环境。

:::

## Windows(start.cmd)

Windows的`start.cmd`分为两个版本，除**PalWorld**服务端外，大部分预设镜像均使用`20230829`版。

### 20230829版

```bat
::启动变量说明，修改前务必查看
::https://www.yuque.com/simpfun/sfe/startup
SET JDK17=C:/jdk17/bin/java.exe
SET JDK8=C:/jdk8/bin/java.exe
SET PYTHON3=C:/python3/python.exe

:: 设置更小的最大内存，防服务端因内存溢出崩溃
SET /A MAX_MEMORY=%SERVER_MEMORY%-1500

::本镜像含有运行库
:: .Net 6.0.20
:: VC++ 2015-2022
:: Python 3.11.5
:: Zulu 8.72.0.17-ca-jdk8.0.382-win_x64
:: Zulu 17.44.15-ca-jdk17.0.8-win_x64

::示例，去掉双引号生效

::启动一个Java17 服务端，核心名称为server-release.jar
::%JDK17% -Xms2G -Xmx%MAX_MEMORY%M -jar server-release.jar

::启动一个Java8 服务端，核心名称为server-release.jar
::%JDK8% -Xms2G -Xmx%MAX_MEMORY%M -jar server-release.jar

```

### 20240125版

```bat

::启动变量说明，修改前务必查看
::https://www.yuque.com/simpfun/sfe/startup
SET PYTHON=C:/python/python.exe
SET MAPPER=C:/mapper.exe

:: 设置更小的最大内存，防服务端因内存溢出崩溃
SET /A MAX_MEMORY=%SERVER_MEMORY%-1500

::本镜像含有运行库
:: .Net 7.0.15
:: VC++ 2015-2022
:: Python 3.12
::本镜像含有组件
:: Mapper端口转发
::支持需要DirectX的服务端（部分Steam服务端）
:: Mapper Github 地址：https://github.com/wangyu-/tinyPortMapper


::示例，去掉双引号生效


::后台启动mapper程序，将内部 UDP：8211 端口映射到可用公网端口

::start C:/mapper.exe -l 0.0.0.0:%SERVER_PORT% -r 127.0.0.1:8211 -u

::启动一个exe程序
:: bedrock_server.exe

```
