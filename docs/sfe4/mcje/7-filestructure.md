---
title：服务端文件结构
---

:::tip

此文档为介绍SFE4中各项预设的文件结构，即各个文件夹及其说明。

若有不精确或不完备的地方，欢迎指正及补漏。

:::

-----

# 通用

| 文件或文件夹 | 说明 |
| :--- | :--- |
| server.jar | 这是服务端的主程序，用于启动和运行服务端。 |
| server.properties | 这是服务端的配置文件，用于设置服务端的各种属性。[有关server.properties的详细解释](https://sfe.zxpweb.link/docs/sfe4/mcje/serverproperties) |
| eula.txt | 这是服务端的许可协议文件，用于确认用户同意遵守[Minecraft的最终用户许可协议（EULA）](https://www.minecraft.net/zh-hans/eula)。 |
| logs | 这是服务端的日志文件夹，用于存储服务端的运行日志。 |
| world | 这是服务端的世界文件夹，用于存储服务端生成和加载的世界数据。 |
| plugins | 这是服务端的插件文件夹，用于存放服务端安装的插件。 |

*碎碎念：关于logs文件夹，它会存储服务器每次运行时的控制台输出并以txt文档保存，命名为服务器启动时间。感觉没必要为这个文件夹单开一个文档，所以在这说了。*

# 特殊

## 存档

关于world文件夹即存档：目前共发现三种可能的存档存储格式，唯一共同点只有world这个文件夹始终存在。

### 第一种格式

| 文件夹 | 说明 |
| :--- | :--- |
| world | 这是存放所有存档的文件夹。world/这一级存放着以各个存档名为名的文件夹，即各个存档。单个存档内的格式可能为以下另外两种存档的格式的任意一种。 |

### 第二种格式

| 文件夹 | 说明 |
| :--- | :--- |
| world | 存放主世界数据和玩家数据。 |
| world_nether | 存放下界数据。 |
| world_end | 存放末地数据。 |

这三个文件夹均在根目录。

本人本地有一个spigot的1.20.1是这种格式

### 第三种格式

| 文件夹 | 说明 |
| :--- | :--- |
| world | 存放主世界数据和玩家数据。 |
| DIM1 | 存放下界数据。 |
| DIM-1 | 存放末地数据。 |

这三个文件夹均在根目录。

#### 第四种（？

~~三大格式有四种，很合理吧！~~

在world/这一级目录中存储的正常的第二种、第三种格式中的world文件夹里的数据，但是DIM1和DIM-1文件夹移动到此处。

已知Fabric1.20.1采用这种格式。

## mod端

因为mod加载器就fo和fa两家，所以直接用他俩

### Fabric

#### mod

在游戏根目录多出mods文件夹，用于存放mod。

默认mods文件夹内的mod都会启用。

#### 游戏核心

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


### Forge

同