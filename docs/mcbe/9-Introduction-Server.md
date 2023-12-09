---
title: 服务端的介绍
---

本篇wiki将介绍BE的各个服务端。

:::tip

部分服务端可能并不存在于`SFE4`中。

:::

:::caution 提示

排序按A-Z排序，不分先后（不是越靠前越好）！

:::

### 省流版表格

|**服务端**|**插件**|**介绍**|
| ---- | ---- | ---- |
|Bedrock Dedicated Server(BDS)|**不兼容**|官方服务端，**不兼容插件**|
|LiteLoaderBDS/LeviLamina|**兼容(.dll/.js)**|加载器式插件服务端，**仅支持Windows上使用**|
|Nukkit系服务端|**兼容(.jar)**|使用 Java 编写，拥有强大的多线程性能，**但不推荐一般生存使用**|
|PocketMine/PocketMine-MP| **兼容** | 使用PHP编写，(PE)BE最开始的服务端，现在国内基本已查无此端|

-----

### Bedrock Dedicated Server(原版BDS)

目前状态：活跃

插件：不支持

Addon：兼容

介绍：
原版BDS，目前**仍然处于早期Alpha测试阶段**，**不兼容插件**。目前仅支持64位设备。

:::info 编者有话说

官方的服务端直到2018年5月才放出来，那么在此之前的服务端都是什么呢？

~~Pocketmine和Nukkit都已经似了~~

:::

:::caution 提示

原版BDS问题很多，包括但不限于——

+ 经常会出现各种漏洞，且官方修复恶性漏洞的积极性非常低。
+ BDS在某些多核多线程低频率的服务器CPU上的性能表现不佳，反而单核性能更强的高主频消费级CPU更适合BDS。
+ 在高负载的情况下（例如大量生物实体堆积/加载复杂区块），有时会出现服务器突然卡顿但是CPU占用率很低的情况。

:::

-----

### LeviLamina（LL3）

目前状态：活跃

插件：理论兼容，实际为0

Addon：兼容

介绍：  
轻量级、模块化和多功能的Minecraft Bedrock Server BDS插件加载器，曾被称为LiteLoaderBDS。

[LeviLamina](https://github.com/LiteLDev/LeviLamina)是一个非官方的插件加载器，旨在为BDS提供必不可少的API支持。通过利用插件，扩展BDS功能的过程变得轻而易举，具有用户友好的开发过程和灵活的方法。

:::caution

LL3正在开发，目前对插件的兼容性为0！无法用于生产环境！

:::

-----

### LiteLoaderBDS（LL2）

目前状态：LTS

插件：兼容 (`.dll`，`.js`)

Addon：兼容

介绍：  
LiteLoaderBDS 是一个非官方的 Minecraft 服务端插件加载器，为BDS提供插件开发支持和插件加载服务，弥补了官方行为包开发接口长期以来存在的一些不足。

:::info 编者有话说

第三方插件端，由国人开发，基于官方BDS修改而来，目前主流的生存插件端。经过较长时间的发展已趋于稳定，可以用于生产环境。

:::

:::caution 提示

LL2已停更，[Github存储库](https://github.com/LiteLDev/LiteLoaderBDSv2)已于2023.10.25归档。最终支持的BDS版本为1.20.31。目前可以使用插件使其兼容1.20.40+版本的客户端。

:::

-----

### NukkitX

目前状态：活跃

插件：兼容 (`.jar`)   

Addon：不支持   

介绍：
(官方的介绍)Nukkit是一款性能高效、基于Java的基岩版服务端。它的结构十分类似于Bukkit/Spigot，同样由Java编写。   

:::info 编者有话说

这个端理论上来说是Nukkit的儿子，而Nukkit似乎又是Pocketmine的儿子，可以说这个端的历史其实非常悠久了。   
NukkitX不使用`C++库`运行而使用`Java`运行，因为Nukkit最开始的目标是做成像Bukkit一样的，在BE上领先的插件端(看名字也能看出来)，只是后来因为Nukkit的原开发组被CubeCraft买去开发Geyser项目了，有别人接手了这个项目，更名成了NukkitX。     

:::

:::warning 警告

NukkitX没有生物生成且对原版特性支持稀碎，非常不建议用于生存服！  

:::

-----

### PetteriM1 Edition

目前状态：活跃

插件：兼容(`.jar`)

Addon：不支持

介绍：

NukkitPetteriM1Edition（简称NukkitPM1E）是PetteriM1为他的服务器SuomiCraft PE制作的Nukkit服务器软件的特殊版本，理论上支持Minecraft基岩版1.2.X-最新版本（根据PetteriM1的更新情况而定），但不会积极维护对过旧版本的支持，建议使用1.12.X以上进服以获得更好的体验。使用方法与Nukkit基本一致。  
**注意：由于需要兼容多版本，NukkitPM1E删除了一些高版本方块和其他物品，请准备开生存服和RPG服的服主谨慎选择使用。本核心适用于开设小游戏服务器。**  

:::info 编者有话说

此核心之前发生过闭源试图垄断社区的行为[(见这里)](https://www.minebbs.com/threads/pm1enk-pm1enk.16912/)，不过现在又重新开源了。

这种行为是在践踏开源协议，践踏整个开源社区。  

同另外几个一样，都是NukkitX的儿子，不过这个是跨版本支持的。  
同理，因为是NukkitX的儿子，所以不建议开生存服。  

存档格式类似于Java版1.12的存档。

:::

-----

### PowerNukkit

目前状态：停更

插件：兼容(`.jar`)

Addon：不支持

介绍：
PowerNukkit 是 NukkitX 的一个分支，它在 NukkitX 的基础上添加了许多新功能和改进。这包括对新的 Minecraft 版本的支持、对红石和其他游戏机制的更好支持以及对插件开发者更友好的 API。PowerNukkit 的目标是提供更稳定、更高性能的 Minecraft 服务器。  

:::info 编者有话说

NukkitX的儿子之一，已经寄了，最后更新日期2021年。多的没什么好说的。  

:::

-----

### PowerNukkitX

目前状态：活跃

插件：兼容(`.jar`/`.js`)  

Addon：不支持  

介绍：

PowerNukkitX（简称PNX）是由包括BlocklyNukkit团队在内的中国Nukkit开发者们负责开发维护的Nukkit分支版本，修复了众多BUG，改善了性能，及时跟进新版本支持、支持1.19所有新方块和新物品、支持新版下界、支持史诗地形生成器(Terra)。在这些大更改的情况下，PNX仍然保持了良好的插件兼容性，Nukkit生态中的数千个插件仍然可以在PNX上运行。  

:::info 编者有话说

PNX，NukkitX的儿子之一，适合开RPG服、建筑服、小游戏服、战争服等，但因为它是NukkitX的儿子，因此不推荐开生存服。  

存档格式类似于Java版1.15的存档，但又不完全像。

:::

-----

### Pocketmine

目前状态：停更

插件：兼容  

Addon：不支持(~~这东西是在Pm似了后才出的~~)  

介绍：

使用PHP开服的服务端。   

:::info 编者有话说

把这个尸体拉出来是因为我想纪念一下。     
作为携带版最早出的服务端，Pm的历史可以说是极其悠久。  
但是网络上现存的资料并不多，我只在Github上找到了[最后更新于2016年的存储库](https://github.com/PocketMine/PocketMine-MP)。  
不过我在Github上发现Pm还有一个到现在还在更新的[分支](https://github.com/pmmp/pocketmine-mp)，也是一种传承吧。  

:::

-----

### PocketMine-MP

目前状态：活跃

插件：兼容

Addon：未知

介绍：

PocketMine的一个分支，到现在还在维护和更新。

:::info 编者有话说

这是我在翻Github的时候偶然发现的（[仓库地址](https://github.com/pmmp/pocketmine-mp)），国内能查到的资料少之又少，也没人用这个端。  
不过PmMP的官方文档说了不建议用于生存服（~~非BDS端的通病~~）。

:::
