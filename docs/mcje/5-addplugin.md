---
title: 如何添加插件
---

:::caution 不适用

此教程不适用于以下服务端：

- Vanilla
- Forge
- NeoForge
- Fabric

:::

:::tip

如果你正在寻找插件,可以访问 ~~[MCBBS（已死）](https://www.mcbbs.net)~~、[苦力怕论坛（BE和JE插件）](https://klpbbs.com)、[MineBBS（JE和BE插件）](https://www.minebbs.com)。

:::

## 插件类型区分

### Bukkit插件

使用BukkitAPI进行开发的插件，绝大部分插件端,以及Arclight，Catserver，Mohist等混合端都使用Bukkit插件。

大部分Bukkit插件支持**向上兼容**，例如插件A作者标注为支持1.8——1.16.x，其实际支持版本可能为1.8——1.20.x，实际情况请自行测试或寻求帮助。

### Paper插件

引入了Paper一些特有的API进行开发的Bukkit插件。Paper及分支支持此类插件。

:::note 提示

就目前来说，使用PaperAPI的插件并不多，并且现在主流插件端均为Paper分支，所以插件你就放心往服务端丢就是。

:::

### Sponge插件

使用SpongeAPI进行开发的插件，目前仅有SpongeVanilla与SpongeForge，以及某些服务端（例如Lantern）支持Sponge插件。

:::warning 提示

大部分Sponge插件**不支持向上兼容**，例如你不能把API7的插件扔进API8的服务器里面，除非插件作者主动同时适配不同版本的Sponge。

:::

## Bukkit插件服务端

:::caution 不适用

此段不适用于以下服务端：

- SpongeForge

:::

1. 进入实例，点击`文件`

2. 进入`plugins`文件夹

3. 上传您的插件

:::tip

注意检查插件版本，前置等。  

混合端可能出现部分插件不兼容。  

不支持 Sponge 或其他服务端的插件。

:::

## SpongeForge服务端

:::caution 提示

此段**仅**适用于以下服务端：

- SpongeForge

:::

1. 进入实例，点击`文件`

2. 进入`mods`文件夹

3. 上传您的 Sponge 插件。

:::danger

本服务端不支持 Bukkit 插件。  

您需要下载专门的 Sponge 插件。

:::
