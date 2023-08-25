---
title: 服务端的介绍
---

本篇文档将讲解BE的各个服务端。

:::tip

部分服务端可能并不存在于`SFE4`中。

:::

:::caution 提示

排序按A-Z排序，不分先后（不是越靠前越好）

:::

-----

### Bedrock Server(原版BDS)

插件：不支持

Addon：兼容

介绍：
官方服务端，最稳定，但是**不兼容插件**。 

:::info 编者有话说

官方的服务端直到2018年5月才放出来，那么在此之前的服务端都是什么呢？
~~Pocketmine和Nukkit都已经似了~~

:::

-----

### LiteLoaderBDS

插件：兼容 (`.dll`，`.js`)   

Addon：兼容   

介绍：
第三方插件端，由国人开发，基于官方BDS修改而来，目前主流的生存插件端。经过较长时间的发展已趋于稳定，可以用于生产环境。     

-----

### NukkitX

插件：兼容 (`.jar`)   

Addon：不支持   

介绍：
(官方的介绍)Nukkit是一款性能高效、基于Java的基岩版服务端。它的结构十分类似于Bukkit/Spigot，同样由Java编写。   

:::info 编者有话说

这个端理论上来说是Nukkit的儿子，而Nukkit似乎又是Pocketmine的儿子，可以说这个端的历史其实非常悠久了。   
NukkitX不使用`C++库`运行而使用`Java`运行，因为Nukkit最开始的目标是做成像Bukkit一样的，在BE上领先的插件端(看名字也能看出来)，只是后来因为种种原因Nukkit的开发组都走了，有别人接手了这个项目，更名成了NukkitX。     

:::

:::warning 警告

NukkitX没有生物生成且对原版特性支持稀碎，非常不建议用于生存服！  

:::

-----

### PetteriM1 Edition

插件：兼容(`.jar`)

Addon：未知(理论不支持)

介绍：
NukkitPetteriM1Edition（简称NukkitPM1E）是PetteriM1为他的服务器SuomiCraft PE制作的Nukkit服务器软件的特殊版本，理论上支持Minecraft基岩版1.2.X-最新版本（根据PetteriM1的更新情况而定），但不会积极维护对过旧版本的支持，建议使用1.12.X以上进服以获得更好的体验。使用方法与Nukkit基本一致。  
**注意：由于需要兼容多版本，NukkitPM1E删除了一些高版本方块和其他物品，请准备开生存服和RPG服的服主谨慎选择使用。本核心适用于开设小游戏服务器。**  

:::info 编者有话说

同另外几个一样，都是NukkitX的儿子，不过这个是跨版本支持的，大多数的小游戏服务器似乎就是在用这个核心。  
同理，因为是NukkitX的儿子，所以不建议开生存服。  

:::


-----

### PowerNukkit

插件：兼容(`.jar`)

Addon：不支持

介绍：
PowerNukkit 是 NukkitX 的一个分支，它在 NukkitX 的基础上添加了许多新功能和改进。这包括对新的 Minecraft 版本的支持、对红石和其他游戏机制的更好支持以及对插件开发者更友好的 API。PowerNukkit 的目标是提供更稳定、更高性能的 Minecraft 服务器。  

:::info 编者有话说

NukkitX的儿子之一，已经寄了，最后更新日期2021年。多的没什么好说的。  

:::

-----

### PowerNukkitX

插件：兼容(`.jar`)  

Addon：未知(理论不支持)  

介绍：
PowerNukkitX（简称PNX）是由包括BlocklyNukkit团队在内的中国Nukkit开发者们负责开发维护的Nukkit分支版本，修复了众多BUG，改善了性能，及时跟进新版本支持、支持1.19所有新方块和新物品、支持新版下界、支持史诗地形生成器(Terra)。在这些大更改的情况下，PNX仍然保持了良好的插件兼容性，Nukkit生态中的数千个插件仍然可以在PNX上运行。  

:::info 编者有话说

PNX，NukkitX的儿子之一，适合开RPG服、建筑服、小游戏服、战争服等，但因为它是NukkitX的儿子，因此不推荐开生存服。  

:::

-----

### Pocketmine

插件：兼容  

Addon：不支持(~~这东西是在Pm似了后才出的~~)  

介绍：
使用PHP开服的服务端。   

:::info 编者有话说

把这个尸体拉出来是因为我想纪念一下。     
作为携带版最早出的服务端，Pm的历史可以说是极其悠久。  
但是网络上现存的资料并不多，我只在Github上找到了[最后更新于2015年的存储库](https://github.com/PocketMine/PocketMine-MP)。  
不过我在Github上发现Pm还有一个到现在还在更新的[分支](https://github.com/pmmp/pocketmine-mp)，也是一种传承吧。  

:::

-----

### PocketMine-MP   

插件：兼容

Addon：未知

介绍：
PocketMine的一个分支，到现在还在维护和更新。

:::info 编者有话说

这是我在翻Github的时候偶然发现的（[仓库地址](https://github.com/pmmp/pocketmine-mp)），国内能查到的资料少之又少，也没人用这个端。
不过PmMP的官方文档说了不建议用于生存服（~~非BDS端的通病~~）。

:::
