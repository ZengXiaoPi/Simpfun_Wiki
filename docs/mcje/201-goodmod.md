---
title: 推荐mod
---

:::caution

Simpfun Wiki仅作为推荐用途推荐这些mod，编辑者不保证可能出现的危险性。

:::

:::caution 注意

+ 本文**可能由于更新不及时**导致标注的插件支持版本出现**错误（包括MCBBS，MC百科也会出现这种情况）**，在确定插件支持版本时请去**CurseForge等原下载地址**查看！
+ 本文提到的mod均适用于**Minecraft Java Edition**！

:::

:::tip

按`Ctrl+F`或使用搜索功能查找标签/mod。

:::

-----

  
## 主服务端mod
  
:::caution 这是什么？

+ 这些mod一般只需要安装在服务端，即您在**简幻欢**中操作的实例。
+ 它们不必或不能安装在您的客户端上。
+ 详情请看mod介绍中的运行环境。

:::

### GeySer For Fabric
 
模组加载器:Fabric 

版本：   
Fabric：1.19——1.20.2   

运行环境:客户端无效, 服务端需装 

标签：`跨平台`  

介绍：   
Geyser实现了跨平台互通，您可以使用此mod实现使用基岩版客户端进入Java版服务器。   
由于两个平台间的差距，会无法实现部分功能。   
**事实上，Geyser支持多种服务端，如Spigot，Velocity等。**   

:::caution 警告

Geyser一般不能与运行环境为**服务端需装,客户端需装**的mod，以及**客户端需装，服务端必装**的mod一起使用。  

:::

下载链接：

[官方](https://geysermc.org/)

-----

### Carpet

模组加载器:Forge, Fabric, LiteLoader

版本：   
Fabric: 1.14.4——1.20.4   
Forge:  1.11——1.13.2    

运行环境:客户端可选, 服务端需装 


标签：`生电` `地毯`

介绍：   
生电必备mod。   
本mod对游戏进行了一些改动，让你能更好的控制游戏内容，并且能更好的理解发生了什么。   
移除了游戏中一些烦人的 Bug，提高了游戏的运行效率。   
**最重要的一点，不论你做了什么，游戏依然完全兼容原版。如果你不需要使用这些工具了，也可以随时切换回原版，而且不产生任何副作用。**
此mod还有丰富的扩展，提供玩家更多功能。   

下载链接：

[MC百科](https://www.mcmod.cn/class/2361.html) | [modrinth](https://modrinth.com/mod/carpet)

-----

### EasyAuth

模组加载器: Fabric, Quilt   

版本：    
Fabric:1.17.1——1.20.1    
Quilt：1.19.1——1.20.1    

运行环境：客户端无效, 服务端需装  

标签： `安全` `管理` `账号`

介绍：   
与[Atuhme](https://zxp.simpfun.me/docs/sfe4/mcje/goodplugin#authme)功能类似的mod，提供Authme中绝大部分功能。   
与Authme不同的是，它提供了**正版免验证:**   
允许拥有正版账户的玩家绕过身份验证，如果玩家由MojangAPI创建，他们将被视为在线玩家。   
具体使用方法可参考[这里](https://www.mcmod.cn/class/6241.html)。   


下载链接：
[Modrinth](https://modrinth.com/mod/easyauth)

-----
## 双端可选mod

:::caution 这是什么？

+ 这些mod在客户端或服务端都是可选的，但装在哪个端就只会影响哪个端，推荐都装上。   
+ 详情请看mod介绍中的运行环境。

:::

### MordenFix (现代化修复)
模组加载器：Forge，NeoForge，Fabric  

版本：   
Forge：1.16.5——1.20.1   
NeoForge：1.20.1   
Fabric：1.16.5——1.20.1   

运行环境：客户端可选，服务端可选

标签：`优化`  

介绍：  
本模组是 Archaic Fix 的继任者，旨在修复错误以提高 Minecraft 的性能，主要为加快启动时间、世界加载时间，并减少内存占用。

本模组在 1.16 和 1.18 的整合包中一般可以将其加载速度翻倍。模组开发主要专注于 1.16，毕竟这是性能最好的版本，但大多数的优化都是所有版本共有的。

如果你好奇本模组在各个 Minecraft 版本都提供了什么优化，不妨去看看 [Wiki](https://github.com/Kasualix/ModernFix/wiki) 。

如果你在安装本模组后遇到任何崩溃，请在GitHub上 [新建 Issue](https://github.com/embeddedt/ModernFix/issues/new)。这是一个活跃＆持续更新的模组，崩溃是可以被解决的。

下载链接：   
[CurseForge](https://www.curseforge.com/minecraft/mc-mods/modernfix) | [Modrinth](https://modrinth.com/mod/modernfix/versions) | [Github](https://github.com/embeddedt/ModernFix/)

-----
### Bee Fix (蜜蜂修复)

模组加载器：Forge

版本：   
Forge：1.16.2——1.20.1

运行环境：客户端可选，服务端可选

标签：`优化`

介绍：   
顾名思义，此模组修复了有关蜜蜂的多个Bug并优化了性能。   
+ MC-168329：蜜蜂不会在下界和末地离开蜂巢
+ MC-190042：蜜蜂会在找不到路时AI混乱
+ MC-206401：蜜蜂有西北方向移动的倾向（可能模组也会修复其他生物的这种倾向）
+ MC-229321：蜜蜂会像僵尸一样被刷新掉（适用于1.17.1~1.18）
+ MC-234364：蜜蜂的死亡动画只将它们翻转90度，而不像其他节肢生物那样翻转180度
+ MC-248332：蜜蜂、恶魂和幻翼都可以摧毁海龟蛋，即使它们都是飞行的（只修复了蜜蜂会摧毁海龟蛋的问题）
+ MC-255743：蜜蜂的寻路系统可能会导致性能问题（1.16.2~1.19.2）

下载地址：   
[CurseForge](https://www.curseforge.com/minecraft/mc-mods/bee-fix)

-----

### FerriteCore (铁氧体磁芯)

模组加载器：Forge，NeoForge，Fabric，Quilt  

版本：  
Forge：1.16.4——1.20.1   
NeoForge：1.20.1   
Fabric：1.16.4——1.20.1   
Quilt：1.18.2——1.20.1   

运行环境：客户端可选，服务端可选  

标签：`优化`  

介绍：    
铁氧体磁芯是一个支持 Forge/Fabric/Quilt 的优化 Mod，它可以以几种不同的优化方式减少内存占用。   
此mod仅在mod数量较多时起作用，mod数量较少时不建议使用。   

下载地址：   
[Modrinth](https://modrinth.com/mod/ferrite-core) | [CurseForge(Forge版)](https://www.curseforge.com/minecraft/mc-mods/ferritecore) | [CurseForge(Fabric版/Quilt版)](https://www.curseforge.com/minecraft/mc-mods/ferritecore-fabric)
  
-----
## 双端必装mod

:::caution 这是什么？

+ 这些mod必须在客户端和服务端同时安装，否则将出现问题！   

:::
### Create (机械动力)

模组加载器：Forge，NeoForge，Fabric，Quilt  

版本：  
Forge：1.14.4——1.20.1    
Fabric：1.20.1，1.19.2，1.18.2     
NeoForge:1.20.1
  
运行环境：客户端必装，服务端必装  

标签：`机械` `多方块` `动力` `自动化` `红石` `蒸汽`

介绍：    
或许你了解过机械动力，但是我们更希望你去体验这款mod！
机械动力（Create）是一个围绕着建筑、装饰和机械的新兴模组，所添加的元素旨在为玩家提供全新的建筑与自动化体验，并尽可能多地为玩家预留自定义空间。在机器与能源方面，模组做出了极大的创新。机器不再由传统科技模组中乏味的电线供能，而是需要玩家搭建机械传动系统驱动。加工过程也不再是枯燥的 GUI 里等待进度条一遍遍被填满，机器可以直接与世界中的物品交互，并且加工时有着精美的动画。模组还具有独创的 动态结构 系统，可以使世界中的方块结构作为整体运动，进行各种自动化，并且有着真实的物理效果。 

下载地址：   
[Modrinth:Fabric/Quilt](https://modrinth.com/mod/create-fabric) | [Modrinth:Forge(>=0.5)](https://modrinth.com/mod/create) | 
