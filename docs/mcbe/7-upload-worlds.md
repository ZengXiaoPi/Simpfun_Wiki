---
title: 从客户端导入存档到服务端
---

本篇wiki将会教你如何往基岩版服务端导入存档。

:::caution 提示

适用服务端：BDS，LLBDS

不适用服务端：Nukkit系，Pocketmine系等

:::

-----

## 从客户端导出

### Android导出教程

由于谷歌对App做出了限制，在BE1.18后，"外部存储"的存储目录被移动至`Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/`下。

如果是您本地创建的存档，其文件夹名称将会是一串无规则`英文字符or数字+等号(=)`，如下图所示。

请打开文件夹内的`levelname.txt`查看存档名，确保你选择的是需要导出的存档。

![勇者よ。光があなたと共にあらんことを](/img/pages/MCBE-Import-Worlds-1.png)

回到`minecraftWorlds`文件夹，选择对应的存档文件夹，压缩成zip格式，如下图所示：

![アリス、全力で行きます！](/img/pages/MCBE-Import-Worlds-2.jpg)

:::warning 警告

在Android11及更高的版本中，由于谷歌的限制，您需要将存档文件夹复制到非`Android/data`的目录下进行压缩！

:::

或者也可以选择不压缩，使用[SFTP工具](/docs/30-sftp.md)直接上传整个文件夹。

### Windows导出教程

*是三个教程里最简单的一个端*

在游戏内点击此处铅笔（绿色高亮显示）

![不许你们夹带私货，因为我没有](../../static/img/pages/MCBE-Import-Worlds-3.png)

在存档详情页拉到最下方，如下图

![等待泰坦降落](../../static/img/pages/MCBE-Import-Worlds-4.png)

直接点击“导出世界”并导出即可

![这个情况还真没见过。这样吧，你先在羽丘一年A班或者天文部寻找“高松灯”发现后立即翻她封面是红花的笔记本并找到歌曲“春日影”，询问她歌曲的由来并邀请她一起组乐队，并在她拒绝后告诉她“只要好好努力避免重蹈覆辙不就好了吗”，在她同意后寻找她的前队友一起组队（丰川祥子除外），最后在你们的第一场live中演奏“春日影”。](../../static/img/pages/MCBE-Import-Worlds-5.png)

### iOS导出教程

与安卓端导出教程基本相同。打开“文件”，在我的iPhone/iPad里找到`Minecraft`，进入以下目录：`/Minecraft/games/com.mojang/minecraftWorlds`后根据文件夹内的`levelname.txt`寻找需要导出的存档并将整个乱码文件夹压缩为zip即可。

![nmd，用drop给电脑发图片加载不出来，气死我了](../../static/img/pages/MCBE-Import-Worlds-6.png)

### 移动端：使用资源包快捷导出

下载“存档导出mod”的资源包，打开方式选择“Minecraft”来导入。

这个包在综合交流群10的群文件里存了一份，Simpbbs上也有[帖子](https://www.simpbbs.com/resources/mod.9/)（←点击即可快捷到达！）

![原来是cloudflare导致我连不上drop的](../../static/img/pages/MCBE-Import-Worlds-7.jpg)

在游戏内全局资源里启用该资源包，或者给你想导出的存档单独装上。

![不是，你这编号对于排版有问题啊，11跑到1前面](../../static/img/pages/MCBE-Import-Worlds-10.png)

然后你的游戏就像电脑端一样可以直接导出存档了！

![全部重构一遍有点麻烦，不做了](../../static/img/pages/MCBE-Import-Worlds-11.png)

### 下载的存档

你已经有存档了，请直接快进下一步。

## 导入存档到SFE4服务器

### 第零步

在往文件管理里扔存档之前，你应该先检查一下存档文件结构是否正确。

基岩版存档内有最少7项、最多（我见过的最多）12项文件/文件夹，只有符合这个格式的存档能被游戏识别。如下表（斜体表示非必须）

| 文件或文件夹 | 说明 |
| :--- | :--- |
| db | 存储存档数据 |
| behavior_packs | 存放行为包 |
| resource_packs | 存放资源包 |
| *texts* | *特殊文本，在存档切换过语言的情况下出现，存放不同语言下不变的文本* |
| levelname.txt | 存放存档名 |
| world_icon.jpeg | 存档图标 |
| level.dat | 存放地图数据 |
| level.dat_old | level.dat的备份 |
| *world_behavior_packs.json* | *记录启用的行为包* |
| *world_behavior_packs_history.json* | *记录所有启用过的行为包* |
| *world_resource_packs.json* | *记录启用的资源包* |
| *world_resource_packs_history.json* | *记录所有启用过的资源包* |

*虽然一般不会有错，但是看看为好，以免套了个文件夹。*

### 第一步

打开SFE4控制台，选择实例，转到文件页面，并转到`/worlds/`文件夹，如下图所示：

![光が道へと導くでしょう。](/img/pages/MCBE-Import-Worlds-8.png)

### 第二步

上传存档文件夹（或存档压缩包），如果上传的是压缩包，在上传完毕后解压。  
如果压缩包后缀名为`.mcworld`，请将其改为`.zip`。  

最终结果应如下图所示：  
例：此处我上传的新存档文件夹名称为`Fontaine`。

![この光に意志を込めて…貫け！バランス崩壊！](/img/pages/MCBE-Import-Worlds-9.png)

### 第三步

回到服务器根目录，打开`server.properties`，找到下面这行配置：

```
level-name=Bedrock level
# Allowed values: Any string without semicolon symbol or symbols illegal for file name: /\n\r\t\f`?*\\<>|\":
```

将其中的`Bedrock level`更改为你上传的存档文件夹的名字。  
例：在上一步中我上传的存档文件夹名为`Fontaine`，那么我就需要把`Bedrock level`更改为`Fontaine`，如下图所示：

![勇気。それは最高の魔法です。](/img/pages/MCBE-InputAddon-6.png)

### 第四步

回到终端界面，开启服务器，查看存档是否正确导入。  
