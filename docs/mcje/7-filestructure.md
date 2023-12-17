---
title: 服务端文件架构
---

:::tip

此文档为介绍SFE4中各项预设的文件结构，即各个文件夹及其说明。

若有不精确或不完备的地方，欢迎指正及补漏。

:::

-----

<!--明天重修这篇，睡觉先-->

<!--# 好痛苦，原来wiki里写了部分内容-->

<!--详见[此处](https://zh.minecraft.wiki/w/Java%E7%89%88%E4%B8%96%E7%95%8C%E6%A0%BC%E5%BC%8F)，不想搬了-->
<!--11.12:将fandom wiki改为新wiki-->

## Vanilla端

首先，让我们从最基础的Vanilla端开始说起。

![To be all the wonderful things I've dreamed](../../static/img/pages/MCJE-Files-1.png)

*这是Vanilla1.20.2的服务端文件(仅展示根目录下的)。*

| 文件或文件夹 | 说明 |
| :--- | :--- |
| libraries | 存储游戏所需的Java库。如果你不知道里头都是啥不要去动！ |
| logs | 这是服务端的日志文件夹，用于存储服务端的运行日志。 |
| versions | 存储游戏的各个版本。每个版本文件夹中包含了该版本的Minecraft服务端程序及其相应的依赖项。 |
| world | 这是服务端的世界文件夹，用于存储服务端生成和加载的世界数据。<br>此文件夹名称可以在[server.properties](./20-serverproperties.md)内的`level-name`一项修改 |
| banned-ips.json | 记录被封禁的IP地址。 |
| banned-players.json | 记录被封禁的玩家的UUID（唯一标识符）。 |
| eula.txt | 这是服务端的许可协议文件，用于确认用户同意遵守[Minecraft的最终用户许可协议（EULA）](https://www.minecraft.net/zh-hans/eula)。 |
| ops.json | 记录被授予操作员权限的玩家信息。<br>`ops.json`中存储的是玩家的UUID，而不是它们的用户名。 |
| server-1.20.2.jar | 这是服务端的主程序，用于启动和运行服务端（核心文件名你可以随便改）。 |
| server.properties | 这是服务端的配置文件，用于设置服务端的各种属性。[有关server.properties的详细解释](./20-serverproperties.md) |
| usercache.json | 用于缓存玩家的UUID（唯一标识符）和用户名的映射关系。这个文件主要用于加速玩家登录过程。<br>需要注意的是，此文件不会存储玩家的数据。 |
| whitelist.json | 记录被允许连接到服务器的玩家列表。<br>此文件包含了被允许连接的玩家的UUID和用户名。 |

*碎碎念：关于logs文件夹，它会存储服务器每次运行时的控制台输出并以txt文档保存，命名为服务器启动时间。感觉没必要为这个文件夹单开一个文档，所以在这说了。*

-----

## Bukkit系端

Bukkit系端的各种分支比较多，此处挑两个比较有代表性的服务端来说。

### Spigot端

作为Paper的上游，这个端我认为还是需要拉出来说下的。

![I know I got a long way to go](../../static/img/pages/MCJE-Files-2.png)

*这是Spigot1.20.4的服务端文件(仅展示根目录下的)。*

与Vanilla端不同的地方如下所示（斜体表示不重要）：

| 文件或文件夹 | 说明 |
| :--- | :--- |
| bundler | Spigot端将Vanilla端下的`libraries`和`versions`两个文件夹的东西都合并到了这个文件夹内。 |
| plugins | 存放插件本体以及插件配置、数据等的文件夹。插件本体直接放入此文件夹即可。 |
| world | 在**所有Bukkit系服务端**内，世界存档被拆成了三个文件夹。<br>此文件夹存储的是主世界数据和玩家数据。 |
| world_nether | 存放下界(地狱)数据。 |
| world_end | 存放末地数据。 |
| bukkit.yml | Bukkit系服务端的配置文件之一，用于配置一些基本的服务器设置。<br>所有CraftBukkit的分支都有此配置文件。 |
| *commands.yml* | 一个配置文件，其中包含 CraftBukkit 服务器的自定义别名和命令方块覆盖。<br>命令方块覆盖系统提供了一种快速简便的方法，可以强制服务器将Mojang提供的命令（而不是Bukkit中内置的命令）用于命令方块，而所有其他命令保持不变。<br>而别名系统本质上使高级用户服务器管理员能够定义自定义命令并强制将特定版本的命令用于默认命令。<br> *PS：正常情况下你大概率用不到，甚至这东西我都是去[互联网档案馆](https://web.archive.org/web/20160325102040/http://wiki.bukkit.org/Commands.yml)查的资料。* |
| *help.yml* | 这是Bukkit的帮助配置文件。<br>默认情况下，您不需要修改此文件。所有插件命令的帮助主题由插件自动提供。<br>*PS：正常情况下你大概率也用不到，因为现在的插件都会提供对应的帮助。*|
| *permissions.yml* | 用于定义玩家和用户组的权限。这个文件通常用于配置LuckPerms插件的权限设置。<br>*PS：你要是用LP插件的话这个文件就重要了。*|
| spigot.yml | Spigot服务端软件的配置文件之一，用于配置一些与服务器性能和行为相关的设置。<br>从Spigot分支出的服务端均有此文件。 |

### Paper端

现在很多服务端都是从Paper端分支出来的，因此这个是必须要说说的。

![I see all the grand possibilities](../../static/img/pages/MCJE-Files-3.png)

*这是Paper1.20.2的服务端文件(仅展示根目录下的)。*

与Vanilla端不同的地方如下所示（斜体表示不重要）：

| 文件或文件夹 | 说明 |
| :--- | :--- |
| chahe | 存放原版服务端核心。<br>从Paper分支出的服务端均有此文件夹。 |
| config | 存放Paper端特有的配置文件。<br>从Paper分支出的服务端均有此文件夹。 |
| plugins | 存放插件本体以及插件配置、数据等的文件夹。插件本体直接放入此文件夹即可。 |
| world | 在**所有Bukkit系服务端**内，世界存档被拆成了三个文件夹。<br>此文件夹存储的是主世界数据和玩家数据。 |
| world_nether | 存放下界(地狱)数据。 |
| world_end | 存放末地数据。 |
| bukkit.yml | Bukkit系服务端的配置文件之一，用于配置一些基本的服务器设置。<br>所有CraftBukkit的分支都有此配置文件。 |
| *commands.yml* | 一个配置文件，其中包含 CraftBukkit 服务器的自定义别名和命令方块覆盖。<br>命令方块覆盖系统提供了一种快速简便的方法，可以强制服务器将Mojang提供的命令（而不是Bukkit中内置的命令）用于命令方块，而所有其他命令保持不变。<br>而别名系统本质上使高级用户服务器管理员能够定义自定义命令并强制将特定版本的命令用于默认命令。<br> *PS：正常情况下你大概率用不到，甚至这东西我都是去[互联网档案馆](https://web.archive.org/web/20160325102040/http://wiki.bukkit.org/Commands.yml)查的资料。* |
| *help.yml* | 这是Bukkit的帮助配置文件。<br>默认情况下，您不需要修改此文件。所有插件命令的帮助主题由插件自动提供。<br>*PS：正常情况下你大概率也用不到，因为现在的插件都会提供对应的帮助。*|
| *permissions.yml* | 用于定义玩家和用户组的权限。这个文件通常用于配置LuckPerms插件的权限设置。<br>*PS：你要是用LP插件的话这个文件就重要了。*|
| spigot.yml | Spigot系服务端软件的配置文件之一，用于配置一些与服务器性能和行为相关的设置。<br>从Spigot分支出的服务端均有此文件。 |
| *version_history.json* | 记录此服务器使用的服务端的历史版本。<br>从Paper分支出的服务端均有此文件。 |

-----

## Mod 端

### Fabric端



## 特殊

### 存档

关于world文件夹即存档：目前共发现三种可能的存档存储格式，唯一共同点只有world这个文件夹始终存在。

#### 第一种格式

| 文件夹 | 说明 |
| :--- | :--- |
| world | 这是存放所有存档的文件夹。world/这一级存放着以各个存档名为名的文件夹，即各个存档。单个存档内的格式可能为以下另外两种存档的格式的任意一种。 |

#### 第二种格式

| 文件夹 | 说明 |
| :--- | :--- |
| world | 存放主世界数据和玩家数据。 |
| world_nether | 存放下界数据。 |
| world_end | 存放末地数据。 |

这三个文件夹均在根目录。

Bukkit 系文件夹均为此格式。

#### 第三种格式

| 文件夹 | 说明 |
| :--- | :--- |
| world | 存放主世界数据和玩家数据。 |
| DIM1 | 存放下界数据。 |
| DIM-1 | 存放末地数据。 |

这三个文件夹均在根目录。

#### 第四种（？

~~三大格式有四种，很合理吧！~~

在world/这一级目录中存储的正常的第二种、第三种格式中的world文件夹里的数据，但是DIM1和DIM-1文件夹移动到此处。

Vanilla、Forge、Fabric 等不是 Bukkit 系的大部分服务端皆为此格式。

### mod端

因为mod加载器就fo和fa两家，所以直接用他俩

#### Fabric

##### mod

在游戏根目录多出mods文件夹，用于存放mod。

默认mods文件夹内的mod都会启用。

##### 游戏核心

fa的游戏核心并不存放在根目录。因为其兼容多版本，所以根目录下的游戏核心变为versions文件夹。

同时因为是mod端，也没有plugins文件夹。

fa的文件结构如下：

| 文件或文件夹 | 说明 |
| :--- | :--- |
| versions | 这是存放服务端的文件夹，内部为以各个版本号为名的文件夹，各个文件夹内存放游戏核心。 |
| server.properties | 这是服务端的配置文件，用于设置服务端的各种属性。[有关server.properties的详细解释](https://sfe.zxpweb.link/docs/sfe4/mcje/serverproperties) |
| eula.txt | 这是服务端的许可协议文件，用于确认用户同意遵守[Minecraft的最终用户许可协议（EULA）](https://www.minecraft.net/zh-hans/eula)。 |
| logs | 这是服务端的日志文件夹，用于存储服务端的运行日志。 |
| world | 这是服务端的世界文件夹，用于存储服务端生成和加载的世界数据。 |
| fabric-server-launcher.properties | fa端的设置文件。但里面只有一个serverJar用来设定游戏核心文件名。 |
| fabric-server-launch.jar | 我不知道 |


#### Forge

同
