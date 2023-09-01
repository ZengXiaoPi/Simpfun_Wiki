---
title: 如何导入存档
---

本篇wiki将会教你如何往服务端导入存档。

:::caution 提示

请根据你的服务端类型选择导入教程!

:::

-----

## BDS系服务端

:::caution

适用服务端：Bedrock，LiteLoaderBDS

:::

#### 第零步

如果你的存档在本地，请先导出你的存档。   

##### Android导出教程
由于谷歌对App做出了限制，在BE1.18后，"外部存储"的存储目录被移动至`Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/`下。   
如果是您本地创建的存档，其文件夹名称将会是一串无规则`英文字符or数字+等号(=)`，如下图所示。  
请打开文件夹内的`levelname.txt`查看存档名，确保你选择的是需要导出的存档。

![勇者よ。光があなたと共にあらんことを](/img/pages/MCBE-Import-Worlds-1.png)

回到`minecraftWorlds`文件夹，选择对应的存档文件夹，压缩成zip格式，如下图所示：

![アリス、全力で行きます！](/img/pages/MCBE-Import-Worlds-2.jpg)

:::warning 警告

在Android11及更高的版本中，由于谷歌的限制，您需要将存档文件夹复制到非`Android/data`的目录下进行压缩！

:::

或者也可以选择不压缩，使用[SFTP工具](/docs/sfe4/30-sftp.md)直接上传整个文件夹。

##### Windows导出教程

`待添加`

##### iOS导出教程

`待添加`

##### 下载的存档

如果你的存档是从网络上下载的，请检查存档的格式是否正确。

#### 第一步

打开SFE4控制台，选择实例，转到文件页面，并转到`/worlds/`文件夹，如下图所示：

![光が道へと導くでしょう。](/img/pages/MCBE-Import-Worlds-8.png)

#### 第二步

上传存档（或存档压缩包），如果上传的是压缩包，在上传完毕后解压。
最终结果应如下图所示：
例：此处我上传的新存档文件夹名称为`Fontaine`。

![この光に意志を込めて…貫け！バランス崩壊！](/img/pages/MCBE-Import-Worlds-9.png)

#### 第三步

回到服务器根目录，打开`server.properties`，找到下面这行配置：     
```
level-name=Bedrock level
# Allowed values: Any string without semicolon symbol or symbols illegal for file name: /\n\r\t\f`?*\\<>|\":
```
将其中的`Bedrock level`更改为你上传的存档文件夹的名字。  
例：在上一步中我上传的存档文件夹名为`Fontaine`，那么我就需要把`Bedrock level`更改为`Fontaine`，如下图所示：   

![勇気。それは最高の魔法です。](/img/pages/MCBE-InputAddon-6.png)   

#### 第四步

回到终端界面，开启服务器，查看存档是否正确导入。  

