---
title: 导入存档到服务端
---

本篇wiki将会教你如何往Java版服务端导入存档。

## 导入到Vanilla/Fabric/Forge/NeoForge服务端

非常简单，直接将存档文件夹里的内容/下载的存档解压后的内容上传至服务端的`/world`文件夹内即可（别忘了先把里头的东西删了）。

`world`文件夹内的东西应如下所示：

```text
文件夹：
/advancements
/data
/datapacks
/DIM1
/DIM-1
/dimensions
/entities
/playerdata
/poi
/region
/serverconfig
/stats

文件：
/level.dat
/level.dat_old
/session.lock
```

:::tip 提示

你的存档内这些东西不一定全都有，但是需要注意的是别又套了一层文件夹就行！

:::

## 导入到Bukkit系服务端

Bukkit系服务端(例如：Spigot、Paper、Purpur等服务端)的世界存储如下所示：

| 服务端类型 | 主世界及其他数据 | 下界数据 | 末地数据 |
| :---- | :---- | :---- | :---- |
| Vanilla | `/world` | `/world/DIM-1` | `/world/DIM1` |
| Bukkit系服务端 | `/world` | `/world_nether/DIM-1` | `/world_the_end/DIM1` |

导入步骤：

1. 将存档文件夹里的内容/下载的存档解压后的内容上传至服务端的`/world`文件夹内。
2. 将`/world`文件夹内的`DIM-1`文件夹放入根目录下的`/world_nether`。
3. 将`/world`文件夹内的`DIM1`文件夹放入根目录下的`/world_the_end`内。

## 导入到Paper或Paper下游服务端

:::info 适用的服务端类型

Paper及下游各分支，包括但不限于Purpur，Leaves，Pufferfish等。

:::

从Paper开始，提供了一套自动转换Vanilla格式存档为Bukkit存档的方法，虽然本质上操作和[上面](#导入到bukkit系服务端)一样。

Paper及下游服务端均支持此方法导入。

### 如何使用

按照[导入到原版服务端的方式](#导入到vanillafabricforgeneoforge服务端)操作即可，服务端会自动转换。

服务端版本应不低于1.12。
