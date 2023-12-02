---
title: 【服务器运维】如何创建服务器
---
相对比 SFE3 ，SFE4 拥有更高级的创建服务器功能。

## 创建流程

1. 进入控制台

![1](/img/pages/CreateServer-1.png)

2. 点击`新建实例`

![2](/img/pages/CreateServer-2.png)

3. 选择`实例类别`，包括了支持的游戏。

:::info

RustedWarfare：铁锈战争  

Mindustry：像素工坊  

Terraria：泰拉瑞亚（现支持 TModLoader ！）  

MinecraftBE：Minecraft 基岩版  

Minecraft互通：基于 Minecraft JE 服务端 Spigot 与互通插件 Geyser 的 Minecraft JE 与 BE 互通服务器  

MinecraftJE：Minecraft Java版

:::

![3](/img/pages/CreateServer-3.png)

4. 选择`实例服务端`

:::caution

在此对 SpongeForge 作补充说明：

- SpongeForge 不支持 Bukkit 插件，仅支持 Sponge 插件
- Sponge 插件放入 `/mods` 文件夹即可

:::

![4](/img/pages/CreateServer-4.png)

5. 选择`实例版本`

:::info

服务端由于自身原因，支持的版本不相同。

:::

![5](/img/pages/CreateServer-5.png)

6. 选择`实例规格`

:::info 实例命名规则

实例命名方式为`CPU级别.具体配置.操作系统`  

CPU级别以字母[C,B,A,S]等分级，代表具体CPU性能，性能排名：S>A>B>C。

参考CPU-Z跑分为CPU全核满载状态下单核在17.01.64基准下的跑分。

目前CPU有：

| CPU性能分级 | CPU型号          | 参考CPU-Z跑分 |
|---------|---------------------|-----------|
| C       | E5-2696v2，E5-2697v2 | ~300      |
| C+      | E5-2682v4            | ~350      |
| B-      | E5-2690v4            | <400      |
| B       | Platinum 8124        | ~400      |
| A       | R9-5900X             | 650       |
| S       | i7-13700k，i9-13900k | ~850      |


具体配置以字母`XS、S、M、L、XL`等分类，代表各个配置套餐，配置排名：`XL>L>M>S>XS`（L：Large，大；M：Medium，中等，S：Small，小），配置越高，体验越流畅，硬盘空间也越大，**但耗费的积分越多**。  

操作系统以字母`L,W`分类，代表实例操作系统`Linux`或`Windows`，可能会影响能使用的实例服务端。  

实例计费方式为按天付费，当日不开服不扣积分。  

当日开服指：服务器实例在当日24小时内启动过，无论是否是否进入服务器，服务器运行状态是否正常，只要启动即视为当日已开服。  

磁盘可以超额，但超出套餐的磁盘将被额外计费，具体价格为：`5积分/Gb/天`。  

若当日开服所需积分不足，则会关闭实例，若连续7天未启动实例，则会**销毁实例**，实例销毁前将会默认创建完整镜像（即备份），此镜像保留60天，可随时通过`新建实例->备份->还原`功能恢复实例文件。  

:::

:::danger 警告

请注意，**过高**的实例规格可能会导致积分高速消耗，建议**按需**选用，后续仍可以更改配置。

:::

![6](/img/pages/CreateServer-6.png)

7. 确认信息并创建

![7](/img/pages/CreateServer-7.png)

8. 选择完成后，您的服务器就会在控制台主页显示，点击即可进入控制界面。